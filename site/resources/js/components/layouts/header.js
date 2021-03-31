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

        }

        this.loadFavorite = this.loadFavorite.bind(this);
        this.renderFavorite = this.renderFavorite.bind(this);
    }
/*
  <nav className="navbar navbar-expand-lg header" id="header">
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
                                {(this.state.isLoadedFavorite)?this.renderFavorite():''}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navigation">
                    <a href="/" className="home-link">
                        <img src="/Images/logo.png"/>
                    </a>

                    <div className="right-panel">
                        <a href="#" id="category" className="container favorites" data-bs-toggle="modal" name="category"
                           data-bs-target="#FavoriteModal"> <img src="/Images/favorites.png"/></a>
                        <a className="container profile" href="/myaccount">

                            <span><img src="/Images/profile.png"/>Мой профиль</span>
                        </a>

                        <a id="new-ad-link" href="/addPost">Подать объявление</a>
                    </div>

                </div>

            </nav>
            <i class="far fa-user"></i>
*/
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                                {(this.state.isLoadedFavorite)?this.renderFavorite():''}
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
                            <li className="nav-item">
                                <a id="new-ad-link"  className="nav-link" href="/addPost">Подать объявление</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <a href="#" id="favorite" className="nav-link favorites" data-bs-toggle="modal" name="category"
                               data-bs-target="#FavoriteModal"><span><i className="fa fa-heart"></i></span></a>
                            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Поиск</button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    read_user() {
        let user_token = Util.get_cookie("user");

        if (!user_token) {
            this.setState({incorrectUser: true})

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
        if(this.state.incorrectUser)
            return <span>Вам необходимо <a href="/account">авторизоватся</a> </span>
        return this.state.favorite.map(item=>(
            <PostItem post={item}/>
        ))
    }
}
