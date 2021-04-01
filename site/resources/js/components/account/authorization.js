import React, {Component} from 'react';
import Util from "../util/util";
import accountIndex from "./accountIndex";
import ReactDOM from "react-dom";
import VerificateEmail from "./verificateEmail";

export default class Authorization extends Component {
    constructor(props) {
        super(props);
        this.auth_user = this.auth_user.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            isLoaded: false,
            obj: null,
            status: '',
            msg: ''
        }
    }

    onChange(e) {
        this.state[e.target.name] = e.target.value;
        Util.setDivError(e.target.name + "Err", "");
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
             Util.setDivError("emailErr", "Это поле нужно заполнить")
            return;
        }
        let re = /^[\w-.]+@[\w-]+.[a-z]{2,4}$/i;
        let valid = re.test(this.state.obj.email);
        if (!valid) {
             Util.setDivError("emailErr", "Неправильный формат email");
            return;
        }

        if (this.state.obj.password.length < 8) {
             Util.setDivError("passwordErr", "Короткий пароль");
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
                Util.set_cookie("user", user_token, {'expires': today});
                let ref = Util.get_cookie("path");
                Util.deleteCookie("path");
                window.location = "/" + ref;
            }
            if (status == 2) {
                ReactDOM.render(<VerificateEmail user={res.user}/>,document.getElementById("authpage"))
            }

        });
    }


}
