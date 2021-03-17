import React, {Component} from 'react';
import ReactDom from 'react-dom';


export default class Welcome extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (<div className="welcome-page">
                <div>
                    <input type="text" name="search"/>
                    <input type="text" name="city"/>
                    <input type="button" value="Поиск"/>
                </div>
            </div>
        );

    }
}
