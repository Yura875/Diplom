import React, {Component} from 'react';
import Util from "../../util/util";


export default class AddPost extends Component {
    constructor(props) {
        super(props);
        this.csrf = document.querySelector('meta[name="csrf-token"]').content;
        this.state = {

            isLoadedUser: false,
            isLoadedCategory: false,
            user: {},
            category: {},
            location: 0,
            locationName: 0,
            obj: {},
            files: [],
            filesName: [],
            postId: 0,
            isLoadedCitys: false,
            citys: [],
            errors: {}


        }
        this.read_user = this.read_user.bind(this);
        this.loadCategories = this.loadCategories.bind(this);

        this.onChange = this.onChange.bind(this);
        this.onChangeTel = this.onChangeTel.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
        this.send = this.send.bind(this);
        this.selectImage = this.selectImage.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.sendFile = this.sendFile.bind(this);
        this.loadCitys = this.loadCitys.bind(this);
        this.selectLocation = this.selectLocation.bind(this);
        this.appendCategory = this.appendCategory.bind(this);


    }

    onChange(e) {
        if (Util.isValid(e.target.value)) {
            this.state[e.target.name] = e.target.value;
            this.state.errors[e.target.name] = null;
            this.setState({});
        } else {
            this.state[e.target.name] = e.target.value;
            this.state.errors[e.target.name] = "Данное поле содержит недопустимые символы";
            this.setState({});
        }
    }


    componentDidMount() {
        this.read_user();

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
                                <ul className="list-group m-1">
                                    {((this.state.isLoadedCategories) ? this.renderCategory(null) : '')}
                                </ul>
                                {(this.state.isSelectedCategory2) ?
                                    (<ul className="list-group m-1">
                                        {this.renderCategory(this.state.currentCategory_Id)}
                                    </ul>) : ''}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="LocationModal" tabIndex="-1" aria-labelledby="LocationModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Местоположение</h5>
                                <input type="button" className="btn-close" data-bs-dismiss="modal"
                                       aria-label="Close"/>
                            </div>

                            <div className="modal-body" id="LocationModalBody">
                                {(this.state.isLoadedCitys) ? this.renderCitys() : ''}

                            </div>
                        </div>
                    </div>
                </div>
                <h1>Подать объявление</h1>
                <div className="field-set-box">

                    <div className="field-set-box-title">Заголовок</div>
                    <div>
                        <label className="form-label">Заголовок*</label>
                        <input type="text" name="title" className="field-set-box-title-input"
                               onChange={this.onChange} value={this.state.title}/>
                        <div
                            className={(this.state.errors.title != null) ? "text-danger d-block" : ""}>
                            {(this.state.errors.title != null) ? this.state.errors.title : ''}
                        </div>
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
                    <div
                        className={(this.state.errors.description != null) ? "text-danger d-block" : ""}>
                        {(this.state.errors.description != null) ? this.state.errors.description : ''}
                    </div>
                    <div className="field-set-box-title">Цена</div>
                    <label className="form-label">Цена*</label><div>
                    <input type="text" name="price" onChange={this.onChangePrice}
                           className="field-set-box-title-input"/><span>грн</span></div>
                    <div
                        className={(this.state.errors.price != null) ? "text-danger d-block" : ""}>
                        {(this.state.errors.price != null) ? this.state.errors.price : ''}
                    </div>

                </div>
                <div className="field-set-box">
                    <div className="field-set-box-title">Фотографии</div>
                    <label className="form-label">Объявления с фото получают в среднем в 3-5 раз больше откликов</label>
                    <div id="imageMode">
                        <div>
                            <ul className="add-main-image-way">
                                <li className="add-image main-image" onClick={this.selectImage} name="image"
                                    id="image0"><a>нажмите,
                                    чтобы добавить главное фото</a></li>
                                <li className="add-image" onClick={this.selectImage} name="image" id="image1"><a>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="camera"
                                         role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                         className="svg-inline--fa fa-camera fa-w-16 fa-7x">
                                        <path fill="currentColor"
                                              d="M324.3 64c3.3 0 6.3 2.1 7.5 5.2l22.1 58.8H464c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h110.2l20.1-53.6c2.3-6.2 8.3-10.4 15-10.4h131m0-32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z"
                                              className=""></path>
                                    </svg>
                                </a></li>
                                <li className="add-image" onClick={this.selectImage} name="image" id="image2"><a>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="camera"
                                         role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                         className="svg-inline--fa fa-camera fa-w-16 fa-7x">
                                        <path fill="currentColor"
                                              d="M324.3 64c3.3 0 6.3 2.1 7.5 5.2l22.1 58.8H464c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h110.2l20.1-53.6c2.3-6.2 8.3-10.4 15-10.4h131m0-32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z"
                                              className=""></path>
                                    </svg>
                                </a></li>
                                <li className="add-image" onClick={this.selectImage} name="image" id="image3"><a>
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
                                <li className="add-image" onClick={this.selectImage} name="image" id="image4"><a>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="camera"
                                         role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                         className="svg-inline--fa fa-camera fa-w-16 fa-7x">
                                        <path fill="currentColor"
                                              d="M324.3 64c3.3 0 6.3 2.1 7.5 5.2l22.1 58.8H464c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h110.2l20.1-53.6c2.3-6.2 8.3-10.4 15-10.4h131m0-32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z"
                                              className=""></path>
                                    </svg>
                                </a></li>
                                <li className="add-image" onClick={this.selectImage} name="image" id="image5"><a>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="camera"
                                         role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                         className="svg-inline--fa fa-camera fa-w-16 fa-7x">
                                        <path fill="currentColor"
                                              d="M324.3 64c3.3 0 6.3 2.1 7.5 5.2l22.1 58.8H464c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h110.2l20.1-53.6c2.3-6.2 8.3-10.4 15-10.4h131m0-32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z"
                                              className=""></path>
                                    </svg>
                                </a></li>
                                <li className="add-image" onClick={this.selectImage} name="image" id="image6">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="camera"
                                         role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                         className="svg-inline--fa fa-camera fa-w-16 fa-7x">
                                        <path fill="currentColor"
                                              d="M324.3 64c3.3 0 6.3 2.1 7.5 5.2l22.1 58.8H464c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h110.2l20.1-53.6c2.3-6.2 8.3-10.4 15-10.4h131m0-32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z"
                                              className=""></path>
                                    </svg>
                                    <a></a></li>
                                <li className="add-image" onClick={this.selectImage} name="image" id="image7"><a>
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
                        <a href="#" className="Category" data-bs-toggle="modal" name="location" id="location"
                           data-bs-target="#LocationModal">{((this.state.location) ? this.state.locationName : '')}</a>
                    </div>
                    <div>
                        <label>Номер телефона</label>
                        <input type="tel" className="add-post-user-data"
                               defaultValue={((this.state.user.tel) ? this.state.user.tel : '')}
                               onChange={this.onChangeTel} name="tel"/>
                        <div
                            className={(this.state.errors.tel != null) ? "text-danger d-block" : ""}>
                            {(this.state.errors.tel != null) ? this.state.errors.tel : ''}
                        </div>
                    </div>

                    <div>
                        <label>Контактное лицо*</label>
                        <input type="text" className="add-post-user-data" defaultValue={this.state.user.name}
                               onChange={this.onChange} name="name"/>
                        <div
                            className={(this.state.errors.name != null) ? "text-danger d-block" : ""}>
                            {(this.state.errors.name != null) ? this.state.errors.name : ''}
                        </div>
                    </div>
                </div>
                <div className="field-set-box">
                    <div className="field-set-box-submit">
                        <input type="button" value="Сохранить" className="new-posts-profile" onClick={this.send}/>
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

    onChangeTel(e) {
        if (Util.isValidTel(e.target.value)) {
            this.state[e.target.name] = e.target.value;
            this.state.errors[e.target.name] = null;
            this.setState({});
        } else {
            this.state[e.target.name] = e.target.value;
            this.state.errors[e.target.name] = "Введите корректный номер. Пример: 8 XXX XXX XX XX";
            this.setState({});
        }
    }

    onChangePrice(e) {
        if (Util.isNumber(e.target.value)) {
            this.state[e.target.name] = e.target.value;
            this.state.errors[e.target.name] = null;
            this.setState({});
        } else {
            this.state[e.target.name] = e.target.value;
            this.state.errors[e.target.name] = "Введите правильную цену, например: 23 или 123.33";
            this.setState({});
        }
    }

    sendFile(file) {

        let formData = new FormData();
        formData.append("_token", this.csrf);
        formData.append('Image', file);

        axios.post("/api/file", formData).then(response => {
                this.state.files.push(response.data.path);
                let imageNumber = this.state.files.length - 1;
                let liImage = document.getElementById("image" + imageNumber);
                liImage.innerHTML = '<img src="' + this.state.files[imageNumber] + '"/>';
                liImage.className = "image-preview";
            }
        )


    }

    send() {
        if (this.state.title.length ==0) {
            this.state.errors.title = "Заголовок не может быть пустым";
            this.setState({});
            return;
        }
        if (!Util.isValid(this.state.title)) {
            this.state.errors.title = "Данное поле содержит недопустимые символы";
            this.setState({});
            return;
        }
        if (this.state.description.length ==0) {
            this.state.errors.description = "Описание не может быть пустым";
            this.setState({});
            return;
        }
        if (!Util.isValid(this.state.description)) {
            this.state.errors.description = "Данное поле содержит недопустимые символы";
            this.setState({});
            return;
        }
        if (!this.state.categoryId) {
            this.state.errors.category = "Выберите рубрику";
            this.setState({});
            return;
        }

        if (!Util.isNumber(this.state.price)) {
            this.state.errors.price = "Введите правильную цену, например: 23 или 123.33";
            this.setState({});
            return;
        }


        let toSend = JSON.stringify({
            title: this.state.title,
            category_id: this.state.categoryId,
            author_id: this.state.user.id,
            city_id: this.state.location,
            body: this.state.description,
            price: parseFloat(this.state.price),
            images: this.state.files

        });


        axios.post('/api/posts', toSend, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {

            if (response.data.status == 1) {
                console.log("OK")
                this.updateUser();
            }


        }).catch(error => {
            console.log(error);
        });
    }

    updateUser() {
        console.log(this.state);
        let toSend = JSON.stringify({
            _token: this.csrf,
            location: this.state.location,
            tel: (Util.isValidTel(this.state.tel) ? this.state.tel : ''),
            name: ((Util.isValid(this.state.name)) ? this.state.name : '')
        });
        axios.put('/api/user/' + this.state.user.id, toSend, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => {
            window.location = "/myaccount";
        })
    }

    loadCategories() {
        axios.get('/api/category').then(response => {

            this.setState({isLoadedCategories: true, category: response.data})
        });
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

                this.setState({
                    user: res.user,
                    isLoadedUser: true,
                    location: res.user.city_id,
                    locationName: res.user.city.name,
                    name: res.user.name,
                    tel: res.user.tel
                });
                this.loadCategories();
                this.loadCitys();
            }

        }).catch(error => {
            Util.incorrect_user();
        });
    }

    appendCategory(e) {
        this.setState({
            currentCategory_Id: e.target.id,
            currentCategoryName: e.target.innerText,
            isSelectedCategory2: true
        });

    }

    selectCategory(e) {
        this.state.categoryId = e.target.id;
        this.state.mode = '';
        document.getElementById('category').innerHTML = e.target.innerText;
        let myModalEl = document.getElementById('CategoryModal');
        let modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();

    }

    renderCategory(id) {
        return this.state.category.map(item => (
            (item.category_id == id) ? (
                <li onClick={(item.category[0] == undefined) ? this.selectCategory : this.appendCategory} id={item.id}
                    className="list-group-item list-group-item-action list-group-item-light"
                    key={item.id.toString()}>{item.name}</li>) : ('')
        ));


    }


    selectImage() {
        let input = document.createElement('input');
        input.type = 'file';
        input.addEventListener('change', (e) => {
            if (this.state.files.length < 8) {
                this.sendFile(e.target.files[0]);
            }


        });
        input.click();

    }

    selectLocation(e) {
        this.state.location = e.target.id;
        document.getElementById('location').innerHTML = e.target.innerText;
        let myModalEl = document.getElementById('LocationModal');
        let modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();

    }

    renderCitys() {
        return (
            <ul className="list-group list-group-flush">
                {this.state.citys.map(item => (

                    <li onClick={this.selectLocation} id={item.id}
                        className="list-group-item text-center"
                        key={item.id.toString()}>{item.name}</li>
                ))}
            </ul>
        );
    }

    loadCitys() {
        axios.get('/api/citys').then(response => {
            this.setState({citys: response.data, isLoadedCitys: true});
            for (let item of response.data){

            }
        });
    }
}
