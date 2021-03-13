import React, {Component} from 'react';

export default class FileOperation extends Component {
    constructor(props) {
        super(props);
        this.csrf = document.querySelector('meta[name="csrf-token"]').content;
        this.send = this.send.bind(this);
        this.state={
            srvAns:'',
            imagePath:''
        }
    }

    render() {
        return (<div>
            <span>Выберите файл</span>
            <input type="file" id="fileToUpload"/><br/>
            <input type="button" onClick={this.send} value="Send"/>
            <div id="srvAns">{this.state.srvAns}</div>
            <img src={this.state.imagePath}/>
        </div>)
    }

    send() {
        let fileInput = document.getElementById("fileToUpload");
        if (!fileInput.files[0]) {
            alert("Выберите файл");
            return;
        }
       let formData=new FormData();
        formData.append('file',fileInput.files[0],fileInput.files[0].name);
        formData.append('_token',this.csrf);
        fetch('/api/file',{
            method:"POST",

            body:formData
        }).then(r=>r.json()).then(res=>{
            this.setState({srvAns:res.status,imagePath:res.path});
        });



    }

}
