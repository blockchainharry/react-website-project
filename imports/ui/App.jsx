import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data';



//import Task from './Task.jsx';

import Home_Page from './Home_Page.jsx';
//import Brands_Page from './Brands_Page.jsx';
//import Performance_Marketers_Page from './Performance_Marketers_Page.jsx';
//import App_Monetization_Page from './App_Monetization_Page.jsx';
//import Data_Page from './Data_Page.jsx';
//import Rewards_Page from './Rewards_Page.jsx';
//import About_Page from './About_Page.jsx';
//import Press_Page from './Press_Page.jsx';
//import Careers_Page from './Careers_Page.jsx';
//import Blog_Page from './Blog_Page.jsx';
//import Sign_In_Page from './Sign_In_Page.jsx';
//import Sign_Up_Page from './Sign_Up_Page.jsx';
//import Not_Found_Page from './Not_Found_Page.jsx';

// App component - represents the whole app
// Components

import Footer from './Footer.jsx';
import Modal from './Modal.jsx';





class App extends React.Component {

    render() {
        return (
            <div id="app">
                <Home_Page/>
                <Footer/>
            </div>
        )
    }
}

export default App;