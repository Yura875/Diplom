import React, {Component} from 'react';
import PostItem from "./postItem";

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoadedPosts: false
        }
        this.readPosts = this.readPosts.bind(this);

    }

    componentDidMount() {
        this.readPosts();
    }

    render() {

        if (this.state.isLoadedPosts) {
            if (this.state.posts.length > 0) {

                return this.renderPosts();
            } else {
                return this.renderNoPosts();
            }
        }
        return (
            <div className="Loading">
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        );
    }

    renderNoPosts() {
        return (<div className="no-posts">
            <img src="/Images/profile/noposts.svg"/>
            <div>
                <h3>Сейчас у вас нет активных объявлений</h3>
                <a className="new-posts-profile" href="/addPost">Подать объявление</a>
            </div>
        </div>);
    }

    readPosts() {

        axios.get("/api/posts/byUser/" + this.props.user.id).then(response => {
            console.log(response);
            this.setState({posts: response.data, isLoadedPosts: true});

        });
    }

    renderPosts() {
        return (<ul className="list-group posts-list m-5">
            {this.state.posts.map(item => (
                <PostItem post={item}/>
            ))}
        </ul>);
    }
}
