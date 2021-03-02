import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ResetPassword from "./resetPassword";

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.csrf = document.querySelector('meta[name="csrf-token"]').content;
        this.state = {
            obj: null,
        }
        this.onChange = this.onChange.bind(this);
        this.send = this.send.bind(this);
    }

    render() {
        return (<div id="resetPassword">
            <a href="/account" className="auth-block forgot-password-back">
                <span className="forgot-password-back-arrow"></span>
                <span className="forgot-password-back-text">Назад</span>
            </a>
            <div className="auth-block">
                <h2>Забыли пароль?</h2>
                <p>Введите ваш email и мы вышлем вам код подтверждения. Вы сможете установить новый пароль после ввода
                    этого кода.</p>
            </div>
            <div className="auth-block">
                <label>Укажите ваш email</label>
                <input type="email" name="email" id="email" title="Укажите ваш email" placeholder="Укажите ваш email"
                       onChange={this.onChange}/>
                <div id="emailErr"></div>
            </div>
            <div className="auth-block">
                <input type="button" value="Изменить" className="Login-Button" onClick={this.send}/>
            </div>
        </div>);
    }

    setDivError(id, msg) {
        const errDiv = document.getElementById(id);
        if (!errDiv) {
            return;
        }
        errDiv.className = "auth-block err-div";
        errDiv.innerHTML = msg;
    }

    send() {
        this.state.obj = {
            _token: this.csrf,
            email: this.state.email,
        }
        if (!this.state.obj.email || 0 === this.state.obj.email.length) {
            this.setDivError("emailErr", "Это поле нужно заполнить")
            return;
        }
        let re = /^[\w-.]+@[\w-]+.[a-z]{2,4}$/i;
        let valid = re.test(this.state.obj.email);
        if (!valid) {
            this.setDivError("emailErr", "Неправильный формат email");
            return;
        }
        console.log(this.state.obj.email);
        fetch("/api/password/email", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.obj)
        }).then(r => r.json()).then(res => {

            if (res.status == 1) {
                ReactDOM.render(<ResetPassword email={this.state.email}/>,document.getElementById("resetPassword"));
            }
        });
    }

    onChange(e) {
        this.state[e.target.name] = e.target.value;
    }
}
