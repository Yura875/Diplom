import React, {Component} from 'react';

export default class PostItem extends Component {
    constructor(props) {
        super(props);
        this.redirectToPost = this.redirectToPost.bind(this);
    }

    render() {
        return (
            <div className="search-post">
                <img src={this.props.post.mainImage} onClick={this.redirectToPost}/>
                <div className="search-title-location"><h4>{this.props.post.title}</h4>
                    <span>{this.props.post.city.name}</span></div>
                <div className="search-wrapper">
                <div className="search-price-favorite">
                    <span><b>{this.props.post.price}</b><span>грн</span></span>
                    <input type="button" value="&#9825;" className="search-favorite-button"/>
                </div>
                </div>
            </div>
        )


    }

    redirectToPost() {
        window.location = "/post/" + this.props.post.slug + "/" + this.props.post.id;
    }
}
