import React, {Component} from 'react';
import ReactDom from 'react-dom';


export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: {},
            isLoadedCities: false
        }
        this.renderCitys = this.renderCitys.bind(this);
        this.loadCities = this.loadCities.bind(this);
        this.selectLocation = this.selectLocation.bind(this);

    }

    componentDidMount() {
        this.loadCities();
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
                                {(this.state.isLoadedCities) ? this.renderCitys() : ''}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="Search m-5">
                    <div className="search-field">
                        <input type="search" name="search" className="field-set-box-title-input" placeholder=""/>
                    </div>
                    <a href="#" className="Category" data-bs-toggle="modal" name="location" id="location"
                       data-bs-target="#LocationModal"><img src="/Images/welcome/location.png"/>Вся Украина</a>

                        <button type="button" className="search-button"><span>&#8981;</span>Поиск</button>

                </div>
            </div>
        );

    }

    loadCities() {
        axios.get('/api/citys').then(response => {
            this.setState({
                isLoadedCities: true,
                cities: response.data
            });

        });
    }

    renderCitys() {
        return (
            <ul className="list-group list-group-flush">
                {this.state.cities.map(item => (

                    <li onClick={this.selectLocation} id={item.id}
                        className="list-group-item text-center"
                        key={item.id.toString()}>{item.name}</li>
                ))}
            </ul>
        );
    }

    selectLocation(e) {
        this.state.location = e.target.innerText;
        document.getElementById('location').innerHTML = '<img src="/Images/welcome/location.png"/>' + e.target.innerText;
        let myModalEl = document.getElementById('LocationModal');
        let modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();

    }
}
