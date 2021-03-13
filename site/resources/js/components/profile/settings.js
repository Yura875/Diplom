import React, {Component} from 'react';

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: {},
            user: this.props.user
        };
        this.csrf = document.querySelector('meta[name="csrf-token"]').content;
        this.onChange = this.onChange.bind(this);
        this.saveContactData = this.saveContactData.bind(this);
        this.saveTelData = this.saveTelData.bind(this);
        this.saveData = this.saveData.bind(this);
        this.savePassData = this.savePassData.bind(this);
        this.delUser = this.delUser.bind(this);

    }

    onChange(e) {
        this.state[e.target.name] = e.target.value;
    }

    saveContactData() {
        this.state.obj = {
            _token: this.csrf,
            name: this.state.name,
            location: this.state.location,
        }

        this.saveData(this.state.obj);
    }

    saveTelData() {
        this.state.obj = {
            _token: this.csrf,
            tel: this.state.tel
        }
        this.saveData(this.state.obj);
    }

    saveData(obj) {

        fetch("/api/user/" + this.state.user.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(r => r.json()).then(res => {
            let status = res.status;
            if (status == 1) {
                const msgDiv = document.getElementById("msg");
                msgDiv.innerHTML = "Сохранение прошло успешно";
                msgDiv.className = "auth-block alert alert-success";
                this.setState({user: res.user});
            }
        });
    }

    savePassData() {
        this.state.obj = {
            _token: this.csrf,
            oldPassword: this.state.oldPassword,
            newPassword: this.state.newPassword
        }
        if (this.state.obj.oldPassword.length < 8) {
            Util.setDivError("oldPassError", "Короткий пароль");
            return;
        }
        if (this.state.obj.newPassword.length < 8) {
            Util.setDivError("newPassError", "Короткий пароль");
            return;
        }
        this.saveData(this.state.obj);
    }

    render() {
        return (<div className="settings-box">
            <div id="msg"></div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Изменить контактные данные
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="auth-block update-user">
                                <label>Выбрать город</label>
                                <input type="text" name="location" onChange={this.onChange}/>
                            </div>
                            <hr/>

                            <div className="auth-block update-user">
                                <label>Контактное лицо</label>
                                <input type="text" name="name" onChange={this.onChange}/>
                            </div>
                            <div className="auth-block update-user">
                                <input type="button" value="Сохранить" className="new-posts-profile"
                                       onClick={this.saveContactData}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Изменить номер телефона
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="auth-block update-user">
                                <label>Новый номер телефона</label>
                                <input type="tel" name="tel" onChange={this.onChange}/>
                            </div>
                            <div className="auth-block update-user">
                                <input type="button" value="Сохранить" className="new-posts-profile"
                                       onClick={this.saveTelData}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Изменить пароль
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="auth-block update-user">
                                <label>Ваш текущий пароль*</label>
                                <input type="password" name="oldPassword" onChange={this.onChange}/>
                                <div id="oldPassError"></div>
                            </div>
                            <div className="auth-block update-user">
                                <label>Новый пароль*</label>
                                <input type="password" name="newPassword" onChange={this.onChange}/>
                                <div id="newPassError"></div>
                            </div>
                            <div className="auth-block update-user">
                                <input type="button" value="Изменить пароль" className="new-posts-profile"
                                       onClick={this.savePassData}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Удалить учетную запись
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="auth-block delete-user">
                                <input type="button" value="Удалить учетную запись" className="new-posts-profile"
                                       onClick={this.delUser}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }

    delUser() {
        fetch("/api/user/" + this.state.user.id, {
            method: "DELETE",
        }).then(r => r.json()).then(res => {
                if (res.status == 1) {
                    Util.deleteCookie("user");
                    window.location="/";
                }
            });
    }
}
