import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

class Careers_Page extends React.Component {
  render(){
    return (
      <div className="careers">
        <div className="hero jumbotron hero-careers">
          <div className="container">
            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
              <h1>Grow with Kiip</h1>
              <h3>Encouraging the next mobile explorers to apply now.</h3>
              <p>We were named to Fast Company's top 50 Most Innovative Companies list in 2013, a mobile titan by AdWeek, and a top Silicon Valley startip by Business Insider. As a Kiiper, you'd be able to have a huge impact from day one.</p>
            </div>
          </div>
        </div>
        <div className="container jobs">
          <h3 className="jobs-open">Open Positions</h3>
          <div className="row">
            <div className="col-md-6">
              <h3>Engineering</h3>
              <NavLink to="/">Back-End Engineer</NavLink>
              <p>San Francisco, CA</p>
              <NavLink to="/">Front-End Engineer</NavLink>
              <p>San Francisco, CA</p>
            </div>
            <div className="col-md-6">
              <h3>General</h3>
              <NavLink to="/">Kiip Me In Mind</NavLink>
              <p>San Francisco, CA</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <NavLink className="btn btn-glassdoor" to="/">Glassdoor Reviews</NavLink>
            </div>
          </div>


        </div>
        <div className="container-fluid kiip-culture">
          <h3>Kiip Culture</h3>
          <h5>See what it's like to be a Kiiper</h5>
          <img src="app/assets/icons/careers-kiip-hq.png" />
        </div>
      </div>
    )
  }
}


export default Careers_Page;
