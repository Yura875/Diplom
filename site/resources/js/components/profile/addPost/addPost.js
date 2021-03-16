import React, {Component} from 'react';
import Util from "../../util/util";
import AddMainImageWay from "./addImage/addMainImageWay";
import AddAlternativeImageWay from "./addImage/addAlternativeImageWay";
import CategoryItem from "./categoryItem";

export default class AddPost extends Component {
    constructor(props) {
        super(props);
        this.csrf = document.querySelector('meta[name="csrf-token"]').content;
        this.state = {

            isLoadedUser: false,
            isLoadedCategory: false,
            user: {},
            category: {}
        }
        this.read_user = this.read_user.bind(this);
        this.read_category = this.read_category.bind(this);
        this.loadNewCategory = this.loadNewCategory.bind(this);


    }

    componentDidMount() {
        this.read_user()

    }

    render() {
        if (this.state.isLoadedUser)
            return (<div className="wrapper">
                <div className="modal fade" id="CategoryModal" tabIndex="-1" aria-labelledby="CategoryModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Рубрика</h5>
                                <input type="button" className="btn-close" data-bs-dismiss="modal"
                                       aria-label="Close"/>
                            </div>
                            <div className="modal-body d-flex" id="CategoryModalBody">
                                {(this.state.isLoadedCategory) ? this.renderCategory(this.state.category) : ''}

                            </div>
                        </div>
                    </div>
                </div>
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
                        <a href="#" className="Category" data-bs-toggle="modal" data-bs-target="#CategoryModal"></a>
                    </div>
                </div>
                <div className="field-set-box">
                    <div className="field-set-box-title">Описание</div>
                    <label className="form-label">Описание*</label>
                    <textarea>

                </textarea>
                    <small><b id="descriptionLength">9000 </b>знаков осталось</small>
                </div>
                <div className="field-set-box">
                    <div className="field-set-box-title">Фотографии</div>
                    <label className="form-label">Объявления с фото получают в среднем в 3-5 раз больше откликов</label>
                    <div id="imageMode">
                        <AddMainImageWay/>
                    </div>

                </div>
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
                this.setState({user: res.user, isLoadedUser: true});
                this.read_category(null);
            }

        });
    }

    read_category() {
        fetch('/api/category/' + null).then(r => r.json()).then(res => {
            this.setState({isLoadedCategory: true, category: res.category})
            return res.category;
        });
    }

    renderCategory(category) {
        return (
            <ul className="list-group">
                {category.map(item => (

                    <li onClick={this.loadNewCategory} id={item.id}
                    className="list-group-item list-group-item-action list-group-item-light"
                    key={item.id.toString()}>{item.name}</li>
                    ))}
            </ul>
        );

    }

    loadNewCategory(e) {
        fetch("/api/category/" + e.target.id).then(r => r.json()).then(res => {
            console.log(res);
            document.getElementById("CategoryModalBody").innerText+= this.renderCategory(res.category);
        });
    }


}
