import React from 'react';
import ReactDOM from 'react-dom';



class Footer extends React.Component {
  linkPrefix(elem) {
    return 'http://v3.kiip.me' +elem
  }
  render(){

    return (
      <footer className="footer">
        <div className="container">
          <div className="top-footer">
            <img className="hidden-xs" src="app/assets/icons/icon-contact.svg" />
            <img className="hidden-lg hidden-md hidden-sm" src="app/assets/icons/star.png" />
            <h3>Let's Talk Moments</h3>
            <h5>Get in touch to learn how Kiip can help your business.</h5>
            <a href="http://v3.kiip.me/contact/#talk-moments-form" className="btn pull-right">Contact Us</a>
          </div>
          <div className="bottom-footer">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <h6>Kiip</h6>
              <a href="http://www.kiip.me">Homepage</a>
              <a href={this.linkPrefix('/brands')}>Brands</a>
              <a href={this.linkPrefix('/developers')}>Developers</a>
              <a href={this.linkPrefix('/selfserve')}>Performance Marketers</a>
              <a href={this.linkPrefix('/rewards')}>Rewards</a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <h6>About Us</h6>
              <a href={this.linkPrefix('/about')}>About Us</a>
              <a href="http://blog.kiip.me">Blog</a>
              <a href={this.linkPrefix('/careers')}>Careers</a>
              <a href={this.linkPrefix('/press')}>Press</a>
              <a className="hidden" href={this.linkPrefix('/privacy')}>Privacy Policy</a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <h6>Misc</h6>

                <a href="http://api.kiip.me/register" id="signup-footer-link">Sign Up</a>
                <a href="http://api.kiip.me/login">Sign In</a>
                <a href={this.linkPrefix('/contact')} id="contact-modal-link">Contact Us</a>
                <a href="http://docs.kiip.me" >Developer Docs</a>
                <a href="http://help.kiip.me/">Knowledge Base</a>

            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <h6>Follow Us</h6>
              <div className="social-links">
              <a href="https://www.facebook.com/Kiip"><i className="fa fa-facebook"></i></a>
              <a href="https://twitter.com/kiip"><i className="fa fa-twitter"></i></a>
              <a href="http://blog.kiip.me"><i className="fa fa-book"></i></a>
              <a href="https://www.youtube.com/channel/UCaU81nWGT6w5TsbLx41W6kw/"><i className="fa fa-youtube"></i></a>
              <a href="http://www.linkedin.com/company/kiip"><i className="fa fa-linkedin"></i></a>
              </div>
            </div>

            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="copyright">Kiip, Inc. &copy; 2017</div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
