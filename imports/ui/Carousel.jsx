import React from 'react';
import ReactDOM from 'react-dom';

class Carousel extends React.Component {
  render(){
    return (
      <div className="kiip-carousel">
        <div id="carousel-brand-stories" className="carousel slide" data-ride="carousel">

          <ol className="carousel-indicators">
            <li data-target="#carousel-brand-stories" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-brand-stories" data-slide-to="1"></li>
            <li data-target="#carousel-brand-stories" data-slide-to="2"></li>
          </ol>


          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="/app/assets/icons/bitmap.png" alt="Campari" />
              <div className="carousel-caption">
                <h3>Hi Maude</h3>
              </div>
            </div>
            <div className="item">
              <img src="..." alt="..." />
              <div className="carousel-caption">
                <h3>Hi Marge</h3>
              </div>
            </div>
            Blerg
          </div>


          <a className="left carousel-control" href="#carousel-brand-stories" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-brand-stories" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}

export default Carousel;
