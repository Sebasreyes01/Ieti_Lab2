import React, {Component} from 'react';
import './App.css';
import {TodoApp} from "./TodoApp";
import {Login} from "./component/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import logo from './logo.svg';

const LoginView = () => (
    <Login/>
);

const TodoAppView = () => (
    <TodoApp/>
);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn:JSON.parse(localStorage.getItem("isLoggedIn")), user:"", password:""};
        // this.handleUserChange = this.handleUserChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        // this.handleIsLoggedInChange = this.handleIsLoggedInChange.bind(this);
        localStorage.setItem("user", "sebastian.reyes");
        localStorage.setItem("password", "ieti2019-1");
        // localStorage.setItem("isLoggedIn", false);
    }

    render() {
        console.log(localStorage.getItem("isLoggedIn"));
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <br/>
                    <br/>
                    {JSON.parse(localStorage.getItem("isLoggedIn")) == true ? <Route path="/todo" component={TodoAppView}/> : <Route exact path="/" component={LoginView}/>}
                    {/*<ul>*/}
                        {/*<li><Link to="/">Login</Link></li>*/}
                        {/*<li><Link to="/todo">Todo</Link></li>*/}
                    {/*</ul>*/}
                    {/*<div>*/}
                        {/*<Route exact path="/" component={LoginView}/>*/}
                        {/*<Route path="/todo" component={TodoAppView}/>*/}
                    {/*</div>*/}
                </div>
            </Router>
        );
    }

    // handleUserChange(e) {
    //     this.setState({user:e.target.value});
    // }
    //
    // handlePasswordChange(e) {
    //     this.setState({password:e.target.value});
    // }
    //
    // handleIsLoggedInChange(e) {
    //     console.log("user: " + localStorage.getItem("user"));
    //     console.log("password: " + localStorage.getItem("password"));
    //     if(this.state.user === localStorage.getItem("user") && this.state.password === localStorage.getItem("password")) {
    //         this.setState({isLoggedIn:true});
    //         // localStorage.setItem("isLoggedIn",true);
    //     } else {
    //         alert("The user or password are incorrect");
    //     }
    // }
}

export default App;
