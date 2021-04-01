import React, {Component} from 'react';

export default class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chat: {},
            isLoadedChat: false
        }
        this.loadChat=this.loadChat.bind(this);
    }
    componentDidMount() {
        this.loadChat();
    }

    render() {
        return (<div>

        </div>);
    }

    loadChat() {
        axios.get('/api/message/' + this.props.user.id).then(console.log);
    }
}
