import React, {Component} from 'react';

export default class VerificateEmail extends Component {
    constructor(props) {
        super(props);
        this.resend = this.resend.bind(this);
    }

    render() {
        return (<div className="auth-block">
            <p>Вам на почту было отправлено сообщение с подтверждением регистрации</p>
            <a href="#" onClick={this.resend}>Отправить повторно</a>
            <a href="/" className="redirect-to-home">Вернутся на главную</a>
        </div>);
    }

    resend() {
        axios.get('/api/email/resend/' + this.props.user.id).then();
    }
}
