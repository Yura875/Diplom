import React, {Component} from 'react';
export default class AddAlternativeImageWay extends Component{
    render() {
        return (<div className="Alternative">
            <input type="file" name="Image0"/>
            <input type="file" name="Image1"/>
            <input type="file" name="Image2"/>
            <input type="file" name="Image3"/>
            <input type="file" name="Image4"/>
            <input type="file" name="Image5"/>
            <input type="file" name="Image6"/>
            <input type="file" name="Image7"/>
        </div>)
    }
}
