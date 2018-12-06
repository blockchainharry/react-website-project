import React from 'react';
import ReactDOM from 'react-dom';

class Rewards_Page extends React.Component {
  render(){
    console.log(this.props);
    return (
      <div className="container not-found">
        <div className="not-found-warning">
          <h1>{this.props.match.url}-page</h1>
        </div>
      </div>
    )
  }
}


export default Rewards_Page;
