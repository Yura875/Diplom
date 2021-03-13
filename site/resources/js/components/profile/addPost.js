import React, {Component} from 'react';
import Util from "../util/util";

export default class AddPost extends Component {
    constructor(props) {
        super(props);
        this.csrf = document.querySelector('meta[name="csrf-token"]').content;
        this.state = {

            isLoaded: false,
            user: {}
        }
        this.read_user = this.read_user.bind(this);

    }

    componentDidMount() {
        this.read_user()
    }

    render() {
        if (this.state.isLoaded)
            return (<div className="wrapper">
                <h1>Подать объявление на OLX</h1>
                <div className="field-set-box">
                    <div className="field-set-box-title">Заголовок</div>
                    <div>
                        <label className="form-label">Заголовок*</label>
                        <input type="text" name="title" className="field-set-box-title-input"/>
                        <small><b id="titleLength">70 </b>знаков осталось</small>
                    </div>
                    <div>
                        <label>Рубрика*</label>
                        <a href="#" className="Category"></a>
                    </div>
                </div>
                <div className="field-set-box">
                    <div className="field-set-box-title">Описание</div>
                    <label className="form-label">Описание*</label>
                    <textarea>

                </textarea>
                    <small><b id="descriptionLength">9000 </b>знаков осталось</small>
                </div>
                <div className="field-set-box"></div>
                <div className="field-set-box">
                    <div className="field-set-box-title">Ваши контактные данные</div>
                    <div className="field-set-box-note">Для удобства мы сохраним эти данные. Внести изменения можно в
                        настройках
                    </div>
                    <div>
                        <label>Местоположение*</label>
                        <input type="text" className="add-post-user-data"/>
                    </div>
                    <div>
                        <label>Номер телефона</label>
                        <input type="text" className="add-post-user-data"/>
                    </div>
                    <div>
                        <label>Email-адресс</label>
                        <input type="text" className="add-post-user-data"/>
                    </div>
                    <div>
                        <label>Контактное лицо*</label>
                        <input type="text" className="add-post-user-data"/>
                    </div>
                </div>
                <div className="field-set-box">
                    <div className="field-set-box-submit">
                        <a>Предпросмотр</a>
                        <input type="button" value="Дальше"/>
                    </div>
                </div>
            </div>)
        return (
            <div className="Loading">
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        );
    }

    read_user() {
        let user_token = Util.get_cookie("user");

        if (!user_token) {
            Util.incorrect_user();

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

        });
    }
}
