import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Authorization from "./authorization";
import Util from "../util/util";
export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.reg_user = this.reg_user.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            isLoaded: false,
            obj: null,
            status: '',
            msg: ''
        }

    }

    clearUserInput() {
        document.getElementById("email").value = "";
        document.getElementById("Pass1").value = "";
        document.getElementById("Pass2").value = "";
        document.getElementById("reg").className = "";
        document.getElementById("auth").className = "active";
        ReactDOM.render(<Authorization/>, document.getElementById("mode"));

    }

    onChange(e) {
        this.state[e.target.name] = e.target.value;
         Util.setDivError(e.target.name + "Err", "");
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
        return (<div id="reg-block">
            <div className="auth-block">
                <label className="form-label">Укажите ваш email</label>
                <input type="email" title="Укажите ваш email" name="email"
                       id="email" onChange={this.onChange}
                       placeholder="Укажите ваш email" required/>
                <div id="emailErr"></div>
            </div>
            <div className="auth-block">
                <label className="form-label">Введите свой пароль</label>
                <input type="password" title="Введите свой пароль" name="password" id="Pass1"
                       placeholder="Введите свой пароль" onChange={this.onChange}/>
                <div id="passwordErr"></div>
            </div>
            <div className="auth-block">
                <label className="form-label">Повторите свой пароль</label>
                <input type="password" title="Повторите свой пароль" name="password2" id="Pass2"
                       placeholder="Повторите свой пароль" onChange={this.onChange}/>
                <div id="password2Err"></div>
            </div>
            <div className="auth-block">
                <input type="button" onClick={this.reg_user} className="Login-Button" value="Регистрация"/>
            </div>

        </div>);
    }

    reg_user() {

        this.state.obj = {
            _token: this.csrf,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password2,
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
        if (this.state.obj.password != this.state.obj.password_confirmation) {
             Util.setDivError("passwordErr", "Пароли не совпадают");
            return;
        }
        fetch("/api/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.obj)


        }).then(r => r.json()).then(res => {
            console.log(res);
            let status = res.status;
            let msg = res.msg;

            const resultDiv = document.querySelector("#serverAns");
            if (!resultDiv) {
                console.log("result div not found")
                return;
            }
            if (status == -1) {

                if (msg.email) {
                    resultDiv.innerHTML = "Данный пользователь уже зарегистрирован";
                }
                if (msg.password) {
                    resultDiv.innerHTML = "Короткий пароль";
                } else if (msg.password_confirmation) {
                    resultDiv.innerHTML = "Пароли не совпадают";
                }

                resultDiv.className = "alert alert-danger auth-block";
            }
            if (status > 0) {
                resultDiv.innerHTML = msg;
                resultDiv.className = "alert alert-success auth-block";
                this.clearUserInput();
                window.location = "/account/verification";

            }
        });
    }
}
