import React from 'react';
import ReactDOM from 'react-dom';

class Newsletter extends React.Component {
  render(){
    return (
      <div className="newsletter">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
            <h2>Subscribe for Moments Insights</h2>
            <p>Subscribe to the Moments Insights Connection. Our monthly M.I.C. Drop provides detailed reports on moment trends discovered across Kiip Network</p>
            <form onSubmit={this.props.sendNewsletter}>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="email@address.com"/> <button className="btn btn-newsletter">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsletter;
