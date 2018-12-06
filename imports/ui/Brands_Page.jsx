import React from 'react';
import ReactDOM from 'react-dom';
import Newsletter from './Newsletter';
import Hero from './Hero';
import Carousel from './Carousel';
import Block from './Block';

class Brands_Page extends React.Component {
  sendNewsletter = (e) => {
    e.preventDefault();
    console.log('hi ', e);
  }

  render(){
    return (
      <div className="brands">
        <div className="hero jumbotron hero-brands">
          <div className="container">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h1>Own the Moment</h1>
              <h3>Our brand partners own the moment to drive success at every state of the marketing funnel.</h3>
            </div>
          </div>
        </div>
        <Newsletter onSubmit={this.sendNewsletter} />
        <div className="container-fluid brand-stories">
          <h2>Brand Stories</h2>
          <div className="col-md-3">campari</div>
          <div className="col-md-3">kraft</div>
          <div className="col-md-3">the new york times</div>
        </div>
        <div className="container-fluid meet-objectives">
          <h3>We Meet Objectives</h3>
          <h5>Drive Awareness</h5>
          <p>Something something Burt Ward</p>
          <h5>Drive Response</h5>
          <p>Something something Burt Ward</p>
          <h5>Build Loyalty</h5>
          <p>Something something Burt Ward</p>
        </div>
      </div>
    )
  }
}


export default Brands_Page;
