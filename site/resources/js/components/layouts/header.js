import React,{Component} from 'react';

export default class Header extends Component{
    render() {
        return (
            <nav className="navbar navbar-expand-lg header">

                <div className="navigation">
                    <a href="/" className="home-link">
                        <img src="/Images/logo.png"/>
                    </a>

                    <div className="right-panel">
                        <a className="container favorites">
                            <img src="/Images/favorites.png"/>
                        </a>
                        <a className="container profile" href="/myaccount">

                            <span><img src="/Images/profile.png"/>Мой профиль</span>
                        </a>

                        <a id="new-ad-link">Подать объявление</a>
                    </div>

                </div>

            </nav>
        );
    }
}
