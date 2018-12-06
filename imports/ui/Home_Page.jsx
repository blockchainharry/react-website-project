import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.jsx';
import Hero from './Hero.jsx';
import Block from './Block.jsx';
import Table from './Table.jsx';
import Modal from './Modal.jsx';

class Home_Page extends React.Component {
  constructor(){
    super();
    this.state = {
      h1: "Enjoy Advertising",
      h3: "We're an ad tech and data platform powering mobile advertising that people like.",
      btnBool: false,
      btnText: "Contact us",
      logoBool: false
    }
  }
  render(){
    return (
      <div>
        <Nav/>
        <Hero
          h1={this.state.h1}
          h3={this.state.h3}
          btnBool={this.state.btnBool}
          btnText={this.state.btnText}
          logoBool={this.state.logoBool}
        />
        <Block/>
        <Table/>
        <Modal/>



      </div>
    )
  }
}

export default Home_Page;
