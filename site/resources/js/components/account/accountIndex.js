import React, {Component} from 'react';
import CookieOperations from "../util/cookieOperations";


export default class accountIndex extends Component {
    constructor(props) {
        super(props);
        this.csrf = document.querySelector('meta[name="csrf-token"]').content;
        this.state = {
            isLoaded: false,
            obj: null,
            status: '',
            msg: ''
        }
        this.onChange = this.onChange.bind(this);
        this.reg_user = this.reg_user.bind(this);
        this.auth_user = this.auth_user.bind(this);
        this.clearUserInput = this.clearUserInput.bind(this);


    }



    render() {
        return (
            <section className="auth-page">
                <div className="auth-box">
                    <ul className="nav nav-tab">
                        <li className="nav-item">
                            <a name="auth" id="auth" className="active" onClick={this.changeActiveTab}
                            >Войти</a>
                        </li>
                        <li className="nav-item">
                            <a type="button" name="reg" id="reg" onClick={this.changeActiveTab}
                            >Регистрация</a>
                        </li>

                    </ul>
                    <div id="serverAns"></div>
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

                    </div>
                    <div id="reg-block" className="d-none">
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

                        </div>
                        <div className="auth-block">
                            <input type="button" onClick={this.reg_user} className="Login-Button" value="Регистрация"/>
                        </div>

                    </div>
                </div>
            </section>
        );

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
        let re = /^[\w-\.]+@[\w-]+.[a-z]{2,4}$/i;
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
            let user_token = res.token;
            let today = new Date();

            today.setHours(0, 0, 0, 0);
            today.setDate(today.getDate() + 30);
            CookieOperations.set_cookie("user", user_token, {'expires': today});
            let ref = CookieOperations.get_cookie("path");
            CookieOperations.deleteCookie("path");
            window.location = "/" + ref;

        });
    }


    reg_user() {
        this.state.obj = {
            _token: this.csrf,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            type: 'reg',
        }
        if (!this.state.obj.email || 0 === this.state.obj.email.length) {
            this.setDivError("emailErr", "Это поле нужно заполнить")
            return;
        }
        let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        let valid = re.test(this.state.obj.email);
        if (!valid) {
            this.setDivError("emailErr", "Неправильный формат email");
            return;
        }

        if (this.state.obj.password.length < 8) {
            this.setDivError("passwordErr", "Короткий пароль");
            return;
        }
        if (this.state.obj.password != this.state.obj.password2) {
            this.setDivError("passwordErr", "Пароли не совпадают");
            return;
        }
        fetch("/api/user/registration", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.obj)


        }).then(r => r.json()).then(res => {

            let status = res.status;
            let msg = res.msg;

            const resultDiv = document.querySelector("#serverAns");
            if (!resultDiv) {
                console.log("result div not found")
                return;
            }
            if (status == -1) {

                resultDiv.innerHTML = msg;
                resultDiv.className = "alert alert-danger auth-block";
            }
            if (status == -2) {
                this.setDivError("emailErr", msg);
            }
            if (status == -3) {
                this.setDivError("passwordErr", msg);
            }
            if (status > 0) {
                resultDiv.innerHTML = msg;
                resultDiv.className = "alert alert-success auth-block";
                this.clearUserInput();
            }
        });
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

    changeActiveTab(e) {
        e.target.className = "active";
        switch (e.target.name) {
            case "auth":
                document.getElementById("reg-block").className = "d-none";
                document.getElementById("auth-block").className = "d-block";
                document.getElementById("reg").className = "";
                break;
            case "reg":
                document.getElementById("auth-block").className = "d-none";
                document.getElementById("reg-block").className = "d-block";
                document.getElementById("auth").className = "";
                break;

        }
    }

    clearUserInput() {
        document.getElementById("email").value = "";
        document.getElementById("Pass1").value = "";
        document.getElementById("Pass2").value = "";
        document.getElementById("reg").className = "";
        document.getElementById("auth").className = "active";
        document.getElementById("reg-block").className = "d-none";
        document.getElementById("auth-block").className = "d-block";
    }
}
