import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Main from './Components/Main';
import Nav from './Components/Nav';
import Slider from './Components/Slider/Slider';
import UsersContainer from "./Components/UsersPage/UsersContainer"
import NewsContainer from "./Components/NewsContainer";
import ProfileContainer from "./Components/ProfileContainer";
import Login from "./Components/Login";
import HeaderContainer from "./Components/Header/HeaderContainer";


const App = (props) => {
    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Nav/>
            <div className='content'>
                <Route path='/news' render={() => <NewsContainer store={props.store}/>}/>
                <Route exact path='/main' render={() => <Main/>}/>
                <Route path='/profile/:id?' render={() => <ProfileContainer/>}/>
                <Route path='/users' render={() => <UsersContainer store={props.store}/>}/>
                <Route path='/login' render={() => <Login/>}/>
                <Route path='/slider' render={() => <Slider/>}/>
            </div>
        </div>


    )

};


export default App;

