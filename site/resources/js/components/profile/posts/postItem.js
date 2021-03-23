import React, {Component} from 'react';
import Util from "../../util/util";


export default class PostItem extends Component {


    constructor(props) {
        super(props);
        this.renderStatus = this.renderStatus.bind(this);
        this.redirectToPost = this.redirectToPost.bind(this);

    }

    redirectToPost() {
        window.location = "/post/" + this.props.post.slug + "/" + this.props.post.id;
    }

    render() {
        return (<li key={this.props.post.id} className="list-group-item">
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
                    <input type="button" value="Редактировать" className="edit-button"/>
                    <input type="button" value="Деактивировать" className="deactivate-button"/>
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
}
