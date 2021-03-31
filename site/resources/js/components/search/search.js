import React, {Component} from 'react';
import Util from "../util/util";
import PostItem from "./postItem";


export default class Search extends Component {
    constructor(props) {
        super(props);
        let obj
        try {
            obj = JSON.parse(Util.get_cookie('search'))
        } catch (ex) {
        }

        this.state = {
            searchData: ((obj) ? obj : {}),
            errors: {},
            posts: [],
            isLoadedPosts: false,
            cities: [],
            isLoadedCities: false,
            category: {},
            currentCategory_Id: 0,
            currentCategoryName: '',
            isLoadedCategories: false,
            cityId: 0,
            categoryId: 0,
            isSelectedCategory2: false,
            isSelectedCategory3: false


        }
        console.log(this.state.searchData);
        this.loadPosts = this.loadPosts.bind(this);
        this.onChange = this.onChange.bind(this);
        this.loadCities = this.loadCities.bind(this);
        this.loadCategories = this.loadCategories.bind(this);
        this.send = this.send.bind(this);
        this.renderCitys = this.renderCitys.bind(this);
        this.renderCategory = this.renderCategory.bind(this);
        this.renderPosts = this.renderPosts.bind(this);
        this.appendCategory = this.appendCategory.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
        this.selectLocation = this.selectLocation.bind(this);
        this.selectCategoryAll = this.selectCategoryAll.bind(this);

    }

    render() {
        return (<div>
            <div className="modal fade" id="CategoryModal" tabIndex="-1" aria-labelledby="CategoryModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Рубрика</h5>
                            <input type="button" className="btn-close" data-bs-dismiss="modal"
                                   aria-label="Close"/>
                        </div>
                        <div className="modal-body d-flex " id="CategoryModalBody">
                            <ul className="list-group m-1">
                                <li id="0" onClick={this.selectCategoryAll}
                                    className="list-group-item list-group-item-action list-group-item-light "
                                    key="0">Все рубрики
                                </li>
                                {((this.state.isLoadedCategories) ? this.renderCategory(null) : '')}
                            </ul>
                            {(this.state.isSelectedCategory2) ?
                                (<ul className="list-group m-1">
                                    <li id={this.state.currentCategory_Id} onClick={this.selectCategoryAll}
                                        className="list-group-item list-group-item-action list-group-item-light "
                                        key="0">Все в рубрике {this.state.currentCategoryName}
                                    </li>
                                    {this.renderCategory(this.state.currentCategory_Id)}
                                </ul>) : ''}
                        </div>
                    </div>
                </div>
            </div>
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
                <a href="#" className="Category pl-3" data-bs-toggle="modal" name="location" id="location"
                   data-bs-target="#LocationModal"><span>Вся Украина</span></a>

                <a href="#" id="category" className="Category pl-3" data-bs-toggle="modal" name="category"
                   data-bs-target="#CategoryModal">Все рубрики</a>
                <div className="price">
                    <span>Цена от</span>

                    <input type="text" name="minPrice" onChange={this.onChange}/>

                    <span>до</span>
                    <input type="text" name="maxPrice" onChange={this.onChange}/>
                    <span>грн</span></div>

            </div>
            <div className="Search m-5">
                <div className="search-field filters">
                    <input type="search" name="search" className="field-set-box-title-input" placeholder="Поиск..."
                           onChange={this.onChange}/>
                    <div
                        className={(this.state.errors.search != null) ? "text-danger d-inline-block" : ""}>
                        {(this.state.errors.search != null) ? this.state.errors.search : ''}
                    </div>
                </div>


                <button type="button" className="search-button" onClick={this.send}>Найти <span>&#8981;</span></button>

            </div>
            <div className="m-5">
                {(this.state.isLoadedPosts) ? this.renderPosts() : ''}

            </div>

        </div>);
    }

    componentDidMount() {
        this.loadCategories();
        this.loadPosts();
        this.loadCities();
    }

    renderCitys() {
        return this.state.cities.map(item => (
            <li onClick={this.selectLocation} id={item.id}
                className="list-group-item text-center"
                key={item.id.toString()}>{item.name}</li>
        ))


            ;
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

    send() {
        if (this.state.errors.search != null
            || this.state.errors.minPrice != null
            || this.state.errors.maxPrice != null) {
            return;
        }
        let toSend = JSON.stringify({
            search: this.state.search,
            minPrice: parseFloat(this.state.minPrice),
            maxPrice: parseFloat(this.state.maxPrice),
            city_id: this.state.location,
            category_id: this.state.categoryId,

        });
        axios.post('api/posts/byParameters', toSend, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response=>{
            this.setState({isLoadedPosts: true, posts: response.data.entity});
        })

    }

    loadCategories() {
        axios.get('/api/category').then(response => {

            this.setState({isLoadedCategories: true, category: response.data})
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

    loadPosts() {
        let toSend = JSON.stringify(this.state.searchData);
        axios.post('/api/posts/byParameters', toSend, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response.data)
            this.setState({isLoadedPosts: true, posts: response.data.entity});
        });

    }
    selectLocation(e) {
        this.state.location = e.target.id;
        document.getElementById('location').innerHTML = e.target.innerText;
        let myModalEl = document.getElementById('LocationModal');
        let modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();

    }
    renderCategory(id) {
        return this.state.category.map(item => (
            (item.category_id == id) ? (
                <li onClick={(item.category[0] == undefined) ? this.selectCategory : this.appendCategory} id={item.id}
                    className="list-group-item list-group-item-action list-group-item-light"
                    key={item.id.toString()}>{item.name}</li>) : ('')
        ));


    }

    renderPosts() {
        return (<div className="">{this.state.posts.map(item => (
            <PostItem post={item}/>
        ))}</div>)
    }

    appendCategory(e) {
        this.setState({
            currentCategory_Id: e.target.id,
            currentCategoryName: e.target.innerText,
            isSelectedCategory2: true
        });

    }

    selectCategory(e) {
        this.state.categoryId = e.target.id;
        this.state.mode = '';
        document.getElementById('category').innerHTML = e.target.innerText;
        let myModalEl = document.getElementById('CategoryModal');
        let modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();

    }

    selectCategoryAll(e) {
        this.state.categoryId = e.target.id;
        this.state.mode = 'All';
        document.getElementById('category').innerHTML = e.target.innerText;
        let myModalEl = document.getElementById('CategoryModal');
        let modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();
    }

}
