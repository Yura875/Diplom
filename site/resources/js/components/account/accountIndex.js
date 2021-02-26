import React, {Component} from 'react';
import CookieOperations from "../util/cookieOperations";
import Authorization from "./authorization";
import ReactDOM from 'react-dom';
import Registration from "./registration";

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
                    <div id="mode">
                        <Authorization/>
                    </div>

                </div>
            </section>
        );

    }


    changeActiveTab(e) {
        e.target.className = "active";
        switch (e.target.name) {
            case "auth":
                ReactDOM.render(<Authorization/>, document.getElementById("mode"));

                document.getElementById("reg").className = "";
                break;
            case "reg":
                ReactDOM.render(<Registration/>, document.getElementById("mode"));

                document.getElementById("auth").className = "";
                break;

        }
    }


}
