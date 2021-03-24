import React, {Component} from 'react';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.readPost = this.readPost.bind(this);
        this.showImages = this.showImages.bind(this);
        this.showIndicators = this.showIndicators.bind(this);
        this.showTel = this.showTel.bind(this);
        this.state = {
            post: {},
            images: {},
            index: 1,
            category: {},
            author: {}
        }
    }

    componentDidMount() {
        this.readPost();
    }

    readPost() {
        axios.get("/api/posts/" + this.props.match.params.id).then(response => {
            console.log(response);
            this.setState({
                post: response.data.post,
                images: response.data.images,
                category: response.data.category,
                author: response.data.user,
                isLoaded: true
            })
        });

    }

    render() {
        if (this.state.isLoaded)
            if (this.state.post != "") {
                return (<div className="m-auto post-page">
                    <div id="carouselExampleIndicators" className="carousel slide w-75 m-auto mt-lg-5"
                         data-bs-ride="carousel">
                        <div className="carousel-indicators" id="carouselIndicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                            {this.showIndicators()}
                        </div>
                        <div className="carousel-inner" id="carouselInner">
                            <div className="carousel-item active">
                                <img src={this.state.post[0].mainImage} className="d-block w-100" alt="..."/>
                            </div>
                            {this.showImages()}
                        </div>
                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="post-info m-5">
                    <span>
                        Рубрика: <b>{this.state.category[0].name}</b>
                    </span>
                        <span>
                        Местоположение: <b>{this.state.author[0].location}</b>
                    </span>
                    </div>
                    <hr/>
                    <h5 className="m-5">Описание</h5>
                    <p className="m-5">{this.state.post[0].body}</p>
                    <hr/>
                    <div className="post-user-info m-5">
                        <h4>Пользователь</h4>
                        <div className="m-5"><img src={this.state.author[0].avatar}/>
                            <span>{this.state.author[0].name}</span>
                            <input type="button" name="tel" onClick={this.showTel} className="tel-button float-right"
                                   value="Показать телефон"/>
                        </div>
                        <div>
                            <span>Написать сообщение</span>
                            <textarea className="message">

                                   </textarea>
                            <input type="button" value="Отправить" className="msg-button"/>
                        </div>
                    </div>
                </div>);
            } else {
                return (<div className="no-found-post">Данное объявление не найдено</div>)
            }
        return (
            <div className="Loading">
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        );
    }

    showTel(e) {
        e.target.value = this.state.author[0].tel;
    }

    showImages() {
        return this.state.images.map(item => (
            <div className="carousel-item">
                <img src={item.name} className="d-block w-100" alt="..."/>
            </div>
        ));
    }

    showIndicators() {
        return this.state.images.map((item, index) => (
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={(index + 1)}
                    className="" aria-current="true" aria-label={"Slide " + (index + 1)}></button>
        ));
    }

}
