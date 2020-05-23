import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Login from './login'


export default class Nav extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <div className="nav">
                weat 테스트 페이지 홈 입니다.<br></br><br></br>
                <Router>
                    <Link to="/">홈으로</Link>
                    <Link to="/login">로그인</Link>
                    <Link to="/login">로그인</Link>
                    <br></br>
                    
                    <Route path="/login" component={Login}></Route>
                </Router>
            </div>
        )
    }
}