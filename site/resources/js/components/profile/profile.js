import React, {Component} from 'react';
import Util from "../util/util";
import Posts from "./posts/posts";
import ReactDOM from "react-dom";
import Authorization from "../account/authorization";
import Registration from "../account/registration";
import Messages from "./messages";
import Settings from "./settings";


export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.csrf = document.querySelector('meta[name="csrf-token"]').content;
        this.state = {
            title: "Объявления",
            isLoaded: false,
            user: {}
        }
        this.read = this.read.bind(this);

        this.changeActiveTab = this.changeActiveTab.bind(this);
    }

    componentDidMount() {

        this.read();
    }

    read() {
        let user_token = Util.get_cookie("user");
        if (!user_token) {
            Util.incorrect_user();
            return;
        }

        fetch("/api/user/" + user_token, {
            method: 'GET',

        }).then(r => r.json()).then(res => {
            console.log(res);
            let status = res.status;
            if (status == -1) {
                Util.incorrect_user();
                return;
            } else if (status == 1) {
                this.setState({user: res.user, isLoaded: true});
            }

        }).catch(er => {
            //  window.location = "/";
        });
    }

    render() {

        if (this.state.isLoaded)
            return (<div>
                    <div className="profile-wrapper">
                        <div className="wrapper">
                            <div className="page-info">
                                <h2>{this.state.title}</h2>
                                <div className="user-data">
                                    <div className="btn-group">
                                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            {this.state.user.name}
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item disabled" href="#">Мой профиль:</a></li>
                                            <li><a className="dropdown-item" href="#" name="posts" id="dropPosts"
                                                   onClick={this.changeActiveTab}>Объвления</a></li>
                                            <li><a className="dropdown-item" href="#" name="messages" id="dropMessages"
                                                   onClick={this.changeActiveTab}>Сообщения</a></li>
                                            <li><a className="dropdown-item" href="#" name="settings" id="dropSettings"
                                                   onClick={this.changeActiveTab}>Настройки</a></li>
                                            <li><a className="dropdown-item disabled" href="#">Избранные:</a></li>
                                            <li><a
                                                id="favorite" data-bs-toggle="modal" name="favorite"
                                                data-bs-target="#FavoriteModal"
                                                className="dropdown-item" href="#">Объявление</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#" onClick={this.logout}>Выйти</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                            <div className="wrapper profile-selector">
                                <ul className="nav nav-tab">
                                    <li className="nav-item">
                                        <a className="active" id="postsLi" name="posts" onClick={this.changeActiveTab}
                                        ><span>Объявление</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a type="button" id="messagesLi" name="messages" onClick={this.changeActiveTab}
                                        ><span>Сообщения</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a type="button" id="settingsLi" name="settings" onClick={this.changeActiveTab}
                                        ><span>Настройки</span></a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper" id="activeTab">
                        <Posts user={this.state.user}/>
                    </div>

                </div>
            );
        return (
            <div className="Loading">
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        );

    }


    changeActiveTab(e) {
        let name;
        if (e.target.tagName == "SPAN") {

            e.target.parentNode.className = "active";
            name = e.target.parentNode.name;


        } else {
            if (!e.target.id.includes("drop"))
                e.target.className = "active";
            name = e.target.name;
        }
        console.log();

        switch (name) {
            case "posts":
                document.getElementById("messagesLi").className = "";
                document.getElementById("settingsLi").className = "";
                this.setState({title: "Объявления"});
                ReactDOM.render(<Posts user={this.state.user}/>, document.getElementById("activeTab"));
                break;
            case "messages":
                document.getElementById("postsLi").className = "";
                document.getElementById("settingsLi").className = "";
                this.setState({title: "Сообщения"});
                ReactDOM.render(<Messages user={this.state.user}/>, document.getElementById("activeTab"));
                break;
            case "settings":
                document.getElementById("postsLi").className = "";
                document.getElementById("messagesLi").className = "";
                this.setState({title: "Настройки"});
                ReactDOM.render(<Settings user={this.state.user}/>, document.getElementById("activeTab"));
                break;


        }
    }

    logout() {
        Util.deleteCookie('user');
        window.location = "/";
    }
}

