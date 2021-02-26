import React, {Component} from 'react';
import CookieOperations from "../util/cookieOperations";
import accountIndex from "./accountIndex";

export default class Authorization extends Component {
    constructor(props) {
        super(props);
        this.auth_user = this.auth_user.bind(this);
        this.onChange = this.onChange.bind(this);
        this.setDivError = this.setDivError.bind(this);
        this.state = {
            isLoaded: false,
            obj: null,
            status: '',
            msg: ''
        }
    }

    onChange(e) {
        this.state[e.target.name] = e.target.value;
        this.setDivError(e.target.name + "Err", "");
    }

    setDivError(id, msg) {
        const errDiv = document.getElementById(id);
        if (!errDiv) {
            return;
        }
        errDiv.className = "auth-block err-div";
        errDiv.innerHTML = msg;
    }

    render() {
        return (
            <div id="auth-block">
                <div className="auth-block">
                    <label className="form-label">Укажите ваш email</label>
                    <input name="email" type="email" title="Укажите ваш email"
                           placeholder="Укажите ваш email" onChange={this.onChange} required/>

                </div>
                <div className="auth-block">
                    <label className="form-label">Ваш текущий пароль</label>
                    <input type="password" title="Ваш текущий пароль" onChange={this.onChange} name="password"
                           placeholder="Ваш текущий пароль" required/>
                </div>
                <div className="auth-block">
                    <a href="/account/forgotPassword">Не можете войти?</a>
                </div>
                <div className="auth-block">
                    <input type="button" onClick={this.auth_user} className="Login-Button" value="Войти"/>
                </div>

            </div>);
    }

    auth_user() {

        this.state.obj = {
            _token: this.csrf,
            email: this.state.email,
            password: this.state.password,


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

        if (this.state.obj.password.length < 8) {
            this.setDivError("passwordErr", "Короткий пароль");
            return;
        }
        fetch("/api/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.obj)


        }).then(r => r.json()).then(res => {

            let status = res.status;

            if (status == -1) {
                const resultDiv = document.querySelector("#serverAns");
                if (!resultDiv) {
                    console.log("result div not found")
                    return;
                }
                resultDiv.innerHTML = "Неверный пароль";
                resultDiv.className = "alert alert-danger auth-block";
                return;
            }
            if (status == 1) {
                let user_token = res.token;
                let today = new Date();

                today.setHours(0, 0, 0, 0);
                today.setDate(today.getDate() + 30);
                CookieOperations.set_cookie("user", user_token, {'expires': today});
                let ref = CookieOperations.get_cookie("path");
                CookieOperations.deleteCookie("path");
                window.location = "/" + ref;
            }
            if (status == 2) {
                window.location = "/account/verification";
            }

        });
    }


}
