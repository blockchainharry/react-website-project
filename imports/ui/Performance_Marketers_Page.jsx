import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

class Performance_Marketers_Page extends React.Component {
  render(){
    return (
      <div className="performance-marketers">
        <div className="hero jumbotron hero-pm">
          <div className="container">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h1>Own the Moment in Your App</h1>
              <h3>Monetize your app and grow your audience with Kiip's easy-to-integrate toolkit</h3>
              <a href="#" className="btn" data-toggle="modal" data-target="#contact-us-modal">Get Started</a>
            </div>
          </div>
        </div>
        <div className="container sdk-stats">
          <div className="row">
            <div className="col-md-3">
              <img src="/app/assets/icons/icon-everyone.svg" />
              <h5>Add incremental revenue stream to your app</h5>
              <p>here's some more text</p>
            </div>
            <div className="col-md-3">
              <img src="/app/assets/icons/icon-everyone.svg" />
              <h5>Add incremental revenue stream to your app</h5>
              <p>here's some more text</p>
            </div>
            <div className="col-md-3">
              <img src="/app/assets/icons/icon-everyone.svg" />
              <h5>Add incremental revenue stream to your app</h5>
              <p>here's some more text</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <NavLink to="/" className="btn btn-glassdoor">See Our Partner Stories</NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Performance_Marketers_Page;
