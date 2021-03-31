import React, {Component} from 'react';
import Authorization from "./authorization";
import ReactDOM from "react-dom";
import Registration from "./registration";

export default class LoginTabs extends Component {
    constructor(props) {
        super(props);
        this.changeActiveTab=this.changeActiveTab.bind(this);
    }
    render() {
        return (<div >
                <ul className="nav nav-tab">
                    <li className="nav-item auth-tab">
                        <a name="auth" id="auth" className="active" onClick={this.changeActiveTab}
                        >Войти</a>
                    </li>
                    <li className="nav-item auth-tab">
                        <a type="button" name="reg" id="reg" onClick={this.changeActiveTab}
                        >Регистрация</a>
                    </li>

                </ul>
                <div id="serverAns"></div>
                <div id="mode">
                    <Authorization/>
                </div>
            </div>
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
