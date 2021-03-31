import React, {Component} from 'react';
import Util from "../util/util";

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.csrf = document.querySelector('meta[name="csrf-token"]').content;
        this.state = {
            isLoadedUser: false,
            user: {},
            citys: {},
            isLoadedCitys: false,
            post: {},
            isLoadedPost: false,
            errors: {}

        }
        this.read_user = this.read_user.bind(this);
        this.loadPost = this.loadPost.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChangeTel = this.onChangeTel.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.save = this.save.bind(this);
        this.selectLocation = this.selectLocation.bind(this);
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

    render() {
        if (this.state.isLoadedPost)
            return (<div className="wrapper">
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
                <h1>Редактировать объявление <b>{this.state.post.title}</b></h1>
                <div className="field-set-box">

                    <div className="field-set-box-title">Заголовок</div>
                    <div>
                        <label className="form-label">Заголовок*</label>
                        <input type="text" name="title" className="field-set-box-title-input"
                               onChange={this.onChange} defaultValue={this.state.post.title}/>
                        <div
                            className={(this.state.errors.title != null) ? "text-danger d-block" : ""}>
                            {(this.state.errors.title != null) ? this.state.errors.title : ''}
                        </div>
                    </div>
                    <div>
                        <label>Рубрика*</label>
                        <a href="#" id="category" className="Category-edit" name="category"
                        >{this.state.post.category.name}</a>
                        <div>Ваше объявление было закреплено за этой рубрикой. Вы не можете изменить её</div>
                    </div>
                </div>
                <div className="field-set-box">
                    <div className="field-set-box-title">Описание</div>
                    <label className="form-label">Описание*</label>
                    <textarea onChange={this.onChange} name="description" defaultValue={this.state.post.body}>

                </textarea>
                    <div
                        className={(this.state.errors.description != null) ? "text-danger d-block" : ""}>
                        {(this.state.errors.description != null) ? this.state.errors.description : ''}
                    </div>
                    <div className="field-set-box-title">Цена</div>
                    <label className="form-label">Цена*</label>
                    <input type="text" name="price" onChange={this.onChangePrice} defaultValue={this.state.post.price}
                           className="field-set-box-title-input"/><span>грн</span>
                    <div
                        className={(this.state.errors.price != null) ? "text-danger d-block" : ""}>
                        {(this.state.errors.price != null) ? this.state.errors.price : ''}
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
                        <input type="button" value="Сохранить" className="new-posts-profile" onClick={this.save}/>
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

    componentDidMount() {
        this.read_user();
    }

    loadCitys() {
        axios.get('/api/citys').then(response => {
            this.setState({citys: response.data, isLoadedCitys: true});
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
                this.loadCitys();
                this.loadPost()
            }

        }).catch(error => {
            console.log(error);
        });
    }

    loadPost() {
        let toSend = JSON.stringify({
            _token: this.csrf,
            post_id: this.props.match.params.id,
            user_id: this.state.user.id
        })
        axios.post('/api/posts/byId', toSend, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response);
            this.setState({
                isLoadedPost: true,
                post: response.data,
                title: response.data.title,
                description: response.data.body,
                price: response.data.price
            });

        }).catch(error => {
            window.location = "/";
        });
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

        });
    }

    save() {
        if (this.state.title.length == 0) {
            this.state.errors.title = "Заголовок не может быть пустым";
            this.setState({});
            return;
        }
        if (!Util.isValid(this.state.description)) {
            this.state.errors.description = "Данное поле содержит недопустимые символы";
            this.setState({});
            return;
        }
        if (!Util.isValid(this.state.title)) {
            this.state.errors.title = "Данное поле содержит недопустимые символы";
            this.setState({});
            return;
        }
        if (!Util.isValid(this.state.description)) {
            this.state.errors.description = "Данное поле содержит недопустимые символы";
            this.setState({});
            return;
        }
        if (!Util.isNumber(this.state.price)) {
            this.state.errors.price = "Введите правильную цену, например: 23 или 123.33";
            this.setState({});
            return;
        }


        let toSend = JSON.stringify({
            _token: this.csrf,
            title: this.state.title,
            city_id: this.state.location,
            body: this.state.description,
            price: parseFloat(this.state.price),

        });
        axios.put('/api/posts/' + this.state.post.id, toSend, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
           this.updateUser();
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
}
