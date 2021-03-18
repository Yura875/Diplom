import React, {Component} from 'react';
import Util from "../../util/util";
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
            obj: {},
            files: {},
            filesCount:0


        }
        this.read_user = this.read_user.bind(this);
        this.read_category = this.read_category.bind(this);
        this.loadNewCategory = this.loadNewCategory.bind(this);
        this.onChange = this.onChange.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
        this.send = this.send.bind(this);
        this.selectImage = this.selectImage.bind(this);
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
                    <textarea onChange={this.onChange} name="description">

                </textarea>
                </div>
                <div className="field-set-box">
                    <div className="field-set-box-title">Фотографии</div>
                    <label className="form-label">Объявления с фото получают в среднем в 3-5 раз больше откликов</label>
                    <div id="imageMode">
                        <div>
                            <ul className="add-main-image-way">
                                <li className="add-image main-image" onClick={this.selectImage} name="image"><a>нажмите,
                                    чтобы добавить главное фото</a></li>
                                <li className="add-image" onClick={this.selectImage} name="image"><a>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="camera"
                                         role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                         className="svg-inline--fa fa-camera fa-w-16 fa-7x">
                                        <path fill="currentColor"
                                              d="M324.3 64c3.3 0 6.3 2.1 7.5 5.2l22.1 58.8H464c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h110.2l20.1-53.6c2.3-6.2 8.3-10.4 15-10.4h131m0-32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z"
                                              className=""></path>
                                    </svg>
                                </a></li>
                                <li className="add-image" onClick={this.selectImage} name="image"><a>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="camera"
                                         role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                         className="svg-inline--fa fa-camera fa-w-16 fa-7x">
                                        <path fill="currentColor"
                                              d="M324.3 64c3.3 0 6.3 2.1 7.5 5.2l22.1 58.8H464c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h110.2l20.1-53.6c2.3-6.2 8.3-10.4 15-10.4h131m0-32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z"
                                              className=""></path>
                                    </svg>
                                </a></li>
                                <li className="add-image" onClick={this.selectImage} name="image"><a>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="camera"
                                         role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                         className="svg-inline--fa fa-camera fa-w-16 fa-7x">
                                        <path fill="currentColor"
                                              d="M324.3 64c3.3 0 6.3 2.1 7.5 5.2l22.1 58.8H464c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h110.2l20.1-53.6c2.3-6.2 8.3-10.4 15-10.4h131m0-32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z"
                                              className=""></path>
                                    </svg>
                                </a></li>


                            </ul>
                            <ul className="add-main-image-way">
                                <li className="add-image" onClick={this.selectImage} name="image"><a>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="camera"
                                         role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                         className="svg-inline--fa fa-camera fa-w-16 fa-7x">
                                        <path fill="currentColor"
                                              d="M324.3 64c3.3 0 6.3 2.1 7.5 5.2l22.1 58.8H464c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h110.2l20.1-53.6c2.3-6.2 8.3-10.4 15-10.4h131m0-32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z"
                                              className=""></path>
                                    </svg>
                                </a></li>
                                <li className="add-image" onClick={this.selectImage} name="image"><a>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="camera"
                                         role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                         className="svg-inline--fa fa-camera fa-w-16 fa-7x">
                                        <path fill="currentColor"
                                              d="M324.3 64c3.3 0 6.3 2.1 7.5 5.2l22.1 58.8H464c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h110.2l20.1-53.6c2.3-6.2 8.3-10.4 15-10.4h131m0-32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z"
                                              className=""></path>
                                    </svg>
                                </a></li>
                                <li className="add-image" onClick={this.selectImage} name="image">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="camera"
                                         role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                         className="svg-inline--fa fa-camera fa-w-16 fa-7x">
                                        <path fill="currentColor"
                                              d="M324.3 64c3.3 0 6.3 2.1 7.5 5.2l22.1 58.8H464c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h110.2l20.1-53.6c2.3-6.2 8.3-10.4 15-10.4h131m0-32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z"
                                              className=""></path>
                                    </svg>
                                    <a></a></li>
                                <li className="add-image" onClick={this.selectImage} name="image"><a>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="camera"
                                         role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                         className="svg-inline--fa fa-camera fa-w-16 fa-7x">
                                        <path fill="currentColor"
                                              d="M324.3 64c3.3 0 6.3 2.1 7.5 5.2l22.1 58.8H464c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h110.2l20.1-53.6c2.3-6.2 8.3-10.4 15-10.4h131m0-32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z"
                                              className=""></path>
                                    </svg>
                                </a></li>
                            </ul>

                        </div>
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
                               defaultValue={this.state.user.location} onChange={this.onChange} name="location"/>
                    </div>
                    <div>
                        <label>Номер телефона</label>
                        <input type="tel" className="add-post-user-data"
                               defaultValue={((this.state.user.tel) ? this.state.user.tel : '')}
                               onChange={this.onChange} name="tel"/>
                    </div>

                    <div>
                        <label>Контактное лицо*</label>
                        <input type="text" className="add-post-user-data" defaultValue={this.state.user.name}
                               onChange={this.onChange} name="name"/>
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


        let toSend = JSON.stringify({
            title: this.state.title,
            category_id: this.state.categoryId,
            author_id: this.state.user.id,
            body: this.state.description,

        });
        axios.post('/api/posts', toSend, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.data.status == 1) {
                this.updateUser();

            }
        }).catch(error => {
            console.log(error);
        });
    }

    updateUser() {
        let toSend = JSON.stringify({
            _token: this.csrf,
            location: this.state.location,
            tel: this.state.tel,
            name: this.state.name
        });
        axios.put('/api/user/' + this.state.user.id, toSend, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => {
            console.log(r);
        })
    }

    read_user() {
        let user_token = Util.get_cookie("user");

        if (!user_token) {
            Util.incorrect_user();

        }

        fetch("/api/user/" + user_token).then(r => r.json()).then(res => {
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
        input.addEventListener('change', (e) => {
            if(this.state.filesCount<8){
                
            }

        });
    input.click();

}

}
