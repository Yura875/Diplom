import React, {Component} from 'react';
import Util from "../util/util";
import Authorization from "./authorization";
import ReactDOM from 'react-dom';
import Registration from "./registration";
import LoginTabs from "./loginTabs";
import ForgotPassword from "./forgotPassword";
import VerificateEmail from "./verificateEmail";

export default class accountIndex extends Component {

    constructor(props) {
        super(props);
        this.csrf = document.querySelector('meta[name="csrf-token"]').content;
        this.state = {
            isLoaded: false,
            obj: null,
            status: '',
            msg: '',
            page: props.location.pathname.substr(9)
        }

    }


    render() {
        return (
            <section className="auth-page">
                <div className="auth-box" id="authpage">
                    {this.renderPage()}
                </div>
            </section>
        );

    }

    renderPage() {
        switch (this.state.page) {
            case "forgotPassword":
                return <ForgotPassword/>
            default:
                return <LoginTabs/>
        }
    }


}
