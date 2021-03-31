import React, {Component} from 'react';

export default class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: {},
            isLoadedCity: false
        }
        console.log(props);
    }

    componentDidMount() {
        axios.get('/api/citys/' + this.props.post.entity.city_id).then(response=>{
            this.setState({
                city:response.data,
                isLoadedCity:true
            })
        });
    }

    render() {
        return (<div className="search-post">
            <img src={this.props.post.entity.mainImage} onClick={this.redirectToPost}/>
            <div className="search-title-location"><h4>{this.props.post.entity.title}</h4>
                {(this.state.isLoadedCity)? <span>{this.state.city[0].name}</span>:''} </div>
            <div className="search-wrapper">
                <div className="search-price-favorite">
                    <span><b>{this.props.post.entity.price}</b><span>грн</span></span>
                    <input type="button" value="&#9825;" className="search-favorite-button"/>
                </div>
            </div>
        </div>)
    }

    redirectToPost() {
        window.location = "/post/" + this.props.post.entity.slug + "/" + this.props.post.entity.id;
    }
}
