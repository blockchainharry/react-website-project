import React from 'react';
import ReactDOM from 'react-dom';

class Hero extends React.Component {
  render(){
    return (
      <div className="hero jumbotron">
        <div className="container">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h1>{this.props.h1}</h1>
            <h3>{this.props.h3}</h3>
            <a href="http://v3.kiip.me/contact/#talk-moments-form" className="btn" >{this.props.btnText}</a>
          </div>
        </div>
        <div className="client-logos container text-center">

          <img className="client-logo" src="app/assets/logos/logo-googleplay.png" />
          <img className="client-logo mcdon hidden-xs" src="app/assets/logos/logo-mcdonalds.png" />
          <img className="client-logo" src="app/assets/logos/logo-cocacola.png" />
          <img className="client-logo" src="app/assets/logos/logo-campari.png" />
          <img className="client-logo" src="app/assets/logos/logo-generalmills.png" />
          <img className="client-logo hidden-sm hidden-xs" src="app/assets/logos/logo-anydo.png" />
          <img className="client-logo" src="app/assets/logos/logo-bmw.png" />
          <img className="client-logo" src="app/assets/logos/logo-jnj.png" />
        </div>
        <div className="downarrow text-center">
          <img src="/downarrow.png" alt=""/>
        </div>
      </div>
    )
  }
}


export default Hero;
