import React, {Component} from 'react';
import Util from "../../util/util";


export default class PostItem extends Component {


    constructor(props) {
        super(props);
        this.renderStatus = this.renderStatus.bind(this);
        this.redirectToPost = this.redirectToPost.bind(this);
        this.deactivatePost = this.deactivatePost.bind(this);
        this.redirectToEditPost = this.redirectToEditPost.bind(this);
        this.csrf = document.querySelector('meta[name="csrf-token"]').content;
        this.state = {
            deactivateButtonValue: 'Активировать'
        }

    }

    redirectToPost() {
        window.location = "/post/" + this.props.post.slug + "/" + this.props.post.id;
    }

    componentDidMount() {
        switch (this.props.post.status) {
            case 'PUBLISHED':
                this.setState({deactivateButtonValue: "Деактивировать"})
                break;
            case "PENDING":
                this.setState({deactivateButtonValue: "Деактивировать"})
                break;
            case "DRAFT":
                this.setState({deactivateButtonValue: "Активировать"})
                break;

        }
    }

    render() {
        return (<li key={this.props.post.id.toString()} className="list-group-item m-3">
            <img src={this.props.post.mainImage} className="main-photo" onClick={this.redirectToPost}/>

            <div className="wrapper">
                <h3>{this.props.post.price}грн</h3>
                <h4>{this.props.post.title}</h4>
                <span
                    className="">от {Util.parseDate(this.props.post.created_at)} до {Util.parseDate(this.props.post.deactivated_at)}</span>
                <div>
                    <img src="/Images/profile/eye.png"/>
                    <span>{this.props.post.visited}</span>
                    <img src="/Images/profile/phone.png"/>
                    <span>{this.props.post.visited_tel}</span>
                </div>
                <div className="float-right">
                    <input type="button" value="Редактировать" className="edit-button" onClick={this.redirectToEditPost}/>
                    <input type="button" defaultValue={this.state.deactivateButtonValue} className="deactivate-button"
                           onClick={this.deactivatePost}/>
                </div>
            </div>

            {this.renderStatus()}
        </li>)
    }

    renderStatus() {
        switch (this.props.post.status) {
            case "PENDING":

                return <b className="alert alert-warning m-2">На модерации</b>
            case "DRAFT":

                return <b className="alert alert-danger m-2">Не активно</b>

        }
    }

    deactivatePost() {

        let toSend = JSON.stringify({
            _token: this.csrf,
            user_id: this.props.user.id,
            post_id: this.props.post.id,
            status: this.props.post.status
        });
        fetch('/api/posts/deactivate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: toSend

        }).then(r => r.text()).then(console.log);
        axios.post('/api/posts/deactivate', toSend, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then();
    }

    redirectToEditPost() {
        window.location = "/edit/" + this.props.post.slug + "/" + this.props.post.id;
    }
}
