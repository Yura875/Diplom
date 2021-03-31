import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PostItem from "./postItem";
import Util from "../util/util";


export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: {},
            isLoadedCities: false,
            categories: {},
            isLoadedCategories: false,
            posts: {},
            isLoadedPosts: false,
            errors: {},
            location:0,
        }
        this.renderCitys = this.renderCitys.bind(this);
        this.renderCategories = this.renderCategories.bind(this);
        this.renderPosts = this.renderPosts.bind(this);
        this.loadCities = this.loadCities.bind(this);
        this.selectLocation = this.selectLocation.bind(this);
        this.loadCategories = this.loadCategories.bind(this);
        this.loadPosts = this.loadPosts.bind(this);
        this.onChange = this.onChange.bind(this);
        this.send = this.send.bind(this);

    }

    onChange(e) {
        console.log(e.target)
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

    componentDidMount() {
        this.loadCities();
        this.loadCategories();
        this.loadPosts();
    }

    render() {
        return (<div className="welcome-page">
                <div className="modal fade" id="LocationModal" tabIndex="-1" aria-labelledby="LocationModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Местоположение</h5>
                                <input type="button" className="btn-close" data-bs-dismiss="modal"
                                       aria-label="Close"/>
                            </div>

                            <div className="modal-body" id="LocationModalBody">
                                <ul className="list-group list-group-flush">
                                    <li onClick={this.selectLocation} id="0"
                                        className="list-group-item text-center"
                                        key="0">Вся Украина
                                    </li>
                                    {(this.state.isLoadedCities) ? this.renderCitys() : ''}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="Search m-5">
                    <div className="search-field">
                        <input type="search" name="search" className="field-set-box-title-input" placeholder=""
                               onChange={this.onChange}/>
                        <div
                            className={(this.state.errors.search != null) ? "text-danger d-inline-block" : ""}>
                            {(this.state.errors.search != null) ? this.state.errors.search : ''}
                        </div>
                    </div>
                    <a href="#" className="Category pl-3" data-bs-toggle="modal" name="location" id="location"
                       data-bs-target="#LocationModal">Вся Украина</a>

                    <button type="button" className="search-button" onClick={this.send}><span>&#8981;</span>Поиск</button>

                </div>
                <div className="main-category m-5">
                    <h1>Главные рубрики</h1>
                    {(this.state.isLoadedCategories) ? this.renderCategories() : ''}
                </div>
                <div className="rand-posts m-5">
                    <h1>Объявления</h1>
                    {(this.state.isLoadedPosts) ? this.renderPosts() : ''}
                </div>
            </div>
        );

    }

    send() {
        if (this.state.errors.search != null) {
            return;
        }
        let data = JSON.stringify({
            'search': this.state.search,
            'city_id': this.state.location,
            'category_id': 0,
        });

        let today = new Date();
        today.setMinutes(today.getMinutes() + 30);
        Util.set_cookie('search', data, {expires: today});
        window.location="/search";
    }

    loadPosts() {
        axios.get('/api/posts').then(response => {
            this.setState({
                isLoadedPosts: true,
                posts: response.data
            });
        })
    }

    loadCategories() {
        axios.get('/api/category').then(response => {

            this.setState({isLoadedCategories: true, categories: response.data})

        });
    }

    loadCities() {
        axios.get('/api/citys').then(response => {
            this.setState({
                isLoadedCities: true,
                cities: response.data
            });


        });
    }

    renderPosts() {
        return (<div className="welcome-posts">{this.state.posts.map(item => (
            <PostItem post={item}/>
        ))}</div>)
    }

    renderCitys() {
        return this.state.cities.map(item => (
            <li onClick={this.selectLocation} id={item.id}
                className="list-group-item text-center"
                key={item.id.toString()}>{item.name}</li>
        ))


            ;
    }

    renderCategories() {

        return <ul className="list-group list-group-horizontal">
            {
                this.state.categories.map(item => ((item.category_id==null)?
                    <li key={item.id} className="list-group-item">
    <span className="main-category-image"><img src={"/Images/welcome/" + item.slug + ".png"}
                                               alt="..."/></span>
                        <span className="main-category-text">{item.name}</span></li>:('')
                ))}
        </ul>
    }

    selectLocation(e) {
        this.state.location = e.target.id;
        document
            .getElementById(
                'location'
            ).innerHTML = e.target.innerText;
        let
            myModalEl = document.getElementById('LocationModal');
        let
            modal = bootstrap.Modal.getInstance(myModalEl);
        modal
            .hide();

    }
}
