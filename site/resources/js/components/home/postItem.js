import React, {Component} from 'react';

export default class PostItem extends Component {
    constructor(props) {
        super(props);
        this.redirectToPost = this.redirectToPost.bind(this);
    }

    render() {
        return (
            <div className="welcome-post">
                <img src={this.props.post.mainImage} onClick={this.redirectToPost}/>
                <h4>{this.props.post.title}</h4>
                <span>{this.props.post.city.name}</span>
                <div>
                   <span><b>{this.props.post.price}</b><span>грн</span></span>
                    <input type="button" value="&#9825;" className="favorite-button"/> </div>
            </div>
        )
    }

    redirectToPost() {
        window.location = "/post/" + this.props.post.slug + "/" + this.props.post.id;
    }
}
