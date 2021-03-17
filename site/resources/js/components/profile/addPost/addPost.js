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
            category: {},
            obj: {}
        }
        this.read_user = this.read_user.bind(this);
        this.read_category = this.read_category.bind(this);
        this.loadNewCategory = this.loadNewCategory.bind(this);
        this.onChange = this.onChange.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
        this.send = this.send.bind(this);
        this.sendPost = this.send.bind(this);
        this.updateUser = this.updateUser.bind(this);


    }

    onChange(e) {
        this.state[e.target.name] = e.target.value;
    }

    selectCategory(e) {
        this.state.categoryId = e.target.id;
        document.getElementById('category').innerHTML = e.target.innerText;
        let myModalEl = document.getElementById('CategoryModal');
        let modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();

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
                        <input type="text" name="title" className="field-set-box-title-input"
                               onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <div>
                        <label>Рубрика*</label>
                        <a href="#" id="category" className="Category" data-bs-toggle="modal" name="category"
                           data-bs-target="#CategoryModal"></a>
                    </div>
                </div>
                <div className="field-set-box">
                    <div className="field-set-box-title">Описание</div>
                    <label className="form-label">Описание*</label>
                    <textarea onChange={this.onChange}>

                </textarea>
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
                        <input type="text" className="add-post-user-data"
                               defaultValue={((this.state.location) ? this.state.location : '')}/>
                    </div>
                    <div>
                        <label>Номер телефона</label>
                        <input type="tel" className="add-post-user-data"
                               defaultValue={((this.state.user.tel) ? this.state.user.tel : '')}/>
                    </div>
                    <div>
                        <label>Email-адресс</label>
                        <input type="text" className="add-post-user-data" defaultValue={this.state.user.email}/>
                    </div>
                    <div>
                        <label>Контактное лицо*</label>
                        <input type="text" className="add-post-user-data" defaultValue={this.state.user.name}/>
                    </div>
                </div>
                <div className="field-set-box">
                    <div className="field-set-box-submit">
                        <input type="button" value="Дальше" onClick={this.send}/>
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


    send() {
        this.state.obj = {
            title: this.state.title,
            category_id: this.state.categoryId,
            author_id: this.state.user.id,
            body: this.state.description,
        }

        this.sendPost(this.state.obj);


        this.updateUser();
    }

    sendPost(obj) {
        fetch("/api/post", {
            method: "POST",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(obj)
        }).then(r => r.text()).then(console.log)
    }

    updateUser() {

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

                    <li onClick={this.selectCategory} id={item.id}
                        className="list-group-item list-group-item-action list-group-item-light"
                        key={item.id.toString()}>{item.name}</li>
                ))}
            </ul>
        );

    }

    loadNewCategory(e) {
        fetch("/api/category/" + e.target.id).then(r => r.json()).then(res => {
            console.log(res);
            document.getElementById("CategoryModalBody").innerText += this.renderCategory(res.category);
        });
    }

    selectImage() {
        let input = document.createElement('input');
        input.type = 'file';
        input.click();
    }

}
