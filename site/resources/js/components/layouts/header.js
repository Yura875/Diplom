import React, {Component} from 'react';
import Util from "../util/util";
import PostItem from "../favorite/PostItem";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: {},
            user: {},
            isLoadedUser: false,
            incorrectUser: false,
            isLoadedFavorite: false,
            errors: {}

        }

        this.loadFavorite = this.loadFavorite.bind(this);
        this.renderFavorite = this.renderFavorite.bind(this);
        this.send = this.send.bind(this);
        this.onChange = this.onChange.bind(this);
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

    render() {
        return (
            <nav className="navbar navbar-expand-lg header">
                <div className="modal fade" id="FavoriteModal" tabIndex="-1" aria-labelledby="FavoriteModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Избранное</h5>
                                <input type="button" className="btn-close" data-bs-dismiss="modal"
                                       aria-label="Close"/>
                            </div>
                            <div className="modal-body d-flex" id="CategoryModalBody">
                                {(this.state.isLoadedFavorite) ? this.renderFavorite() : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    <i className="fa fa-home"></i></a>
                            </li>
                            <li className="nav-item profile">
                                <a className="nav-link" href="/myaccount"><i className="fa fa-user"></i><span>Мой профиль</span></a>
                            </li>

                        </ul>
                        <div className="d-flex mr-5">
                            <a href="#" id="favorite" className="nav-link favorites" data-bs-toggle="modal"
                               name="favorite"
                               data-bs-target="#FavoriteModal"><span><i className="fa fa-heart"></i></span></a>
                            <input className="form-control me-2" type="search" onChange={this.onChange} name="search"
                                   placeholder="Поиск" aria-label="Search"/>
                            <button className="btn btn-outline-success" onClick={this.send} type="submit">Поиск</button>
                        </div>
                        <div className="d-flex ml-5">
                            <a id="new-ad-link" className="nav-link" href="/addPost">Подать объявление</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    send() {
        if (this.state.errors.search != null) {
            return;
        }
        let data = JSON.stringify({
            'search': this.state.search,
        });

        let today = new Date();
        today.setMinutes(today.getMinutes() + 30);
        Util.set_cookie('search', data, {expires: today});
        window.location = "/search";
    }

    read_user() {
        let user_token = Util.get_cookie("user");

        if (!user_token) {
            return

        }

        fetch("/api/user/" + user_token).then(r => r.json()).then(res => {

            let status = res.status;
            if (status == 1) {

                this.setState({
                    user: res.user,
                    isLoadedUser: true,
                });
                this.loadFavorite()
            }

        });
    }

    componentDidMount() {
        this.read_user();
    }

    loadFavorite() {
        axios.get('/api/favorite/' + this.state.user.id).then(response => {
            this.setState({isLoadedFavorite: true, favorite: response.data})
        })
    }

    renderFavorite() {
        if (this.state.incorrectUser)
            return <span>Вам необходимо <a href="/account">авторизоватся</a> </span>
        return this.state.favorite.map(item => (
            <PostItem post={item}/>
        ))
    }
}
