import React, {Component} from 'react';

export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.csrf = document.querySelector('meta[name="csrf-token"]').content;
        this.state = {
            obj: {}
        }
        this.onChange = this.onChange.bind(this);
        this.send = this.send.bind(this);
        this.resend = this.resend.bind(this);
    }

    render() {
        return (<div className="reset-password">
            <a href="/account" className="auth-block forgot-password-back">
                <span className="forgot-password-back-arrow"></span>
                <span className="forgot-password-back-text">Назад</span>
            </a>
            <div className="auth-block">
                <h2>Введите код и новый пароль</h2>
            </div>
            <div className="auth-block">
                <p>Код для подтверждения нового пароля был отправлен на укзаную почту</p>
                <a className="resend-code" onClick={this.resend}>Отправить код повторно</a>
            </div>
            <div id="resDiv"></div>
            <div className="auth-block">
                <label>Введите код</label>
                <input type="text" placeholder="Введите код" title="Введите код" onChange={this.onChange} name="code"/>
                <div id="codeErr"></div>
            </div>
            <div className="auth-block">
                <label>Введите новый пароль</label>
                <input type="password" placeholder="Введите новый пароль" title="Введите новый пароль"
                       name="newpassword" onChange={this.onChange}/>
                <div id="passErr"></div>
            </div>
            <div className="auth-block">
                <input type="button" value="Изменить" className="Login-Button" onClick={this.send}/>
            </div>
        </div>);
    }

    onChange(e) {
        this.state[e.target.name] = e.target.value;
    }

    send() {
        this.state.obj = {
            _token: this.csrf,
            code: this.state.code,
            password: this.state.newpassword
        }
        if (!this.state.obj.code) {
             Util.setDivError("codeErr", "Это поле нужно заполнить");
            return;
        }
        if (this.state.obj.password.length < 8) {
             Util.setDivError("passErr", "Короткий пароль");
            return;
        }
        fetch("/api/password/reset", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.obj)
        }).then(r => r.json()).then(res => {
            if (res.status == -1) {
                document.getElementById("resDiv").innerHTML = "Неверный код";
                document.getElementById("resDiv").className = "auth-block alert alert-danger";

            }
            if (res.status == 1) {
                window.location = "/account";
            }
        });
    }

    resend() {
        fetch("/api/password/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                _token: this.csrf,
                email: this.props.email
            })
        }).then(r => r.text());
    }

    setDivError(id, msg) {
        const errDiv = document.getElementById(id);
        if (!errDiv) {
            return;
        }
        errDiv.className = "auth-block err-div";
        errDiv.innerHTML = msg;
    }
}
