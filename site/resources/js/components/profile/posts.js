import React, {Component} from 'react';
export default class Posts extends Component{
    render() {
        return(<div id="listContainer">
            {this.renderNoPosts()}
        </div>);
    }
    renderNoPosts(){
        return (<div className="no-posts">
            <img src="/Images/profile/noposts.svg"/>
            <div>
            <h3>Сейчас у вас нет активных объявлений</h3>
            <a className="new-posts-profile" href="/addPost">Подать объявление</a>
            </div>
        </div>);
    }
}
