import React, {Component} from 'react';
import Util from "../util/util";

export default class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

            user: {},
            isLoadedUser: false
        }
        this.redirectToPost = this.redirectToPost.bind(this);
        this.addFavorite = this.addFavorite.bind(this);
        this.read_user = this.read_user.bind(this);
    }
    componentDidMount() {
        this.read_user();
    }

    render() {
        return (
            <div className="search-post">
                <img src={this.props.post.mainImage} onClick={this.redirectToPost}/>
                <div className="search-title-location"><h4>{this.props.post.title}</h4>
                    <span>{this.props.post.city.name}</span></div>
                <div className="search-wrapper">
                    <div className='d-none' id={"errDiv"+this.props.post.id}></div>
                    <div className="search-price-favorite">
                        <span><b>{this.props.post.price}</b><span>грн</span></span>
                        <input type="button" value="&#9825;" className="search-favorite-button"
                               id={this.props.post.id} onClick={this.addFavorite}/>
                    </div>
                </div>
            </div>
        )


    }

    addFavorite(e) {

        if(!this.state.isLoadedUser){
           document.getElementById("errDiv"+this.props.post.id).innerHTML="Вам необходимо <a href='/account'>авторизоватся</a>";
           document.getElementById("errDiv"+this.props.post.id).className="d-block text-danger";
            return;
        }
        if(this.state.user.id==this.props.post.author_id){
            document.getElementById("errDiv"+this.props.post.id).innerHTML="Произошлоа ошибка при добавлении в избранное";
            document.getElementById("errDiv"+this.props.post.id).className="d-block text-danger";
            return;
        }
        let toSend=JSON.stringify({
            user_id:this.state.user.id,
            post_id:e.target.id
        })
        axios.post('/api/favorite',toSend,{
            headers:{
                'Content-Type':'application/json'
            }
        }).then(console.log)
    }

    read_user() {
        let user_token = Util.get_cookie("user");

        if (!user_token) {
            return;
        }

        fetch("/api/user/" + user_token).then(r => r.json()).then(res => {
            console.log(res);
            let status = res.status;
            if (status == -1) {
                Util.incorrect_user();
                return;
            } else if (status == 1) {
                console.log(res.user);
                this.setState({
                    user: res.user,
                    isLoadedUser: true
                });
            }

        }).catch(error => {
            Util.incorrect_user();
        });
    }

    redirectToPost() {
        window.location = "/post/" + this.props.post.slug + "/" + this.props.post.id;
    }
}
