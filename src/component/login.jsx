import React, { Component } from 'react'

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            url:"http://"
        }
        this.handleUrl = this.handleUrl.bind(this);
    }
    handleUrl = (e) => {
        this.setState({[e.target.name]:e.target.value});
        console.log('url Changed');
    }
    render(){
        return(
            <div className="login">
                <form action={this.state.url} method="post">
                    <br></br>
                    weat 로그인 테스트 폼<br></br><br></br>
                    url입력 <input type="text" onChange={this.handleUrl} name="url" value={this.state.url} placeholder="url입력"></input><br></br>
                    아이디<input type="text" name="username"></input><br></br>
                    비밀번호<input type="text" name="password"></input><br></br>
                    <button type="submit">로그인</button>
                </form>
            </div>
        )
    }
}