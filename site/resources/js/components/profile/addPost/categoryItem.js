import React, {Component} from 'react';

export default class CategoryItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li onClick={this.loadNewCategory} id={this.props.category.id}
                className="list-group-item list-group-item-action list-group-item-light"
                key={this.props.category.id.toString()}> {this.props.category.name} </li>
        );
    }
}
