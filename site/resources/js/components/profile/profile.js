import React, {Component} from 'react';
import CookieOperations from "../util/cookieOperations";
import Posts from "./posts";


export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.csrf = document.querySelector('meta[name="csrf-token"]').content;
        this.state = {
            title:"Объявления",
            isLoaded: false,
            user: {}
        }
        this.read = this.read.bind(this);
        this.incorrect_user = this.incorrect_user.bind(this);
    }

    componentDidMount() {

        this.read();
    }

    read() {
        let user_token = CookieOperations.get_cookie("user");

        if (!user_token) {
            this.incorrect_user();

        }

        fetch("/api/user/" + user_token, {
            method: 'GET',

        }).then(r => r.json()).then(res => {
            let status = res.status;
            if (status == -1) {
                this.incorrect_user();
                return;
            } else if (status == 1) {
                this.setState({user: res.user, isLoaded: true});
            }

        });
    }

    incorrect_user() {
        let today = new Date();
        today.setHours(today.getHours() + 1);

        CookieOperations.set_cookie("path", "myaccount", {expires: today})
        window.location = "/account";
        return;
    }

    render() {


        return (<div>

        </div>);

    }


}
