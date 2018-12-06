import React from 'react';
import ReactDOM from 'react-dom';


// To do:
// need to make sure that form submits somewhere

class Modal extends React.Component {
  render(){
    return (
      <div className="modal fade" tabIndex="-1" role="dialog" id="contact-us-modal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header container">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h2 className="modal-title">Let's Talk Moments</h2>
              <p>Let's talk moments. Get in touch to learn how Kiip can help your business.</p>
            </div>
            <div className="modal-body container">
              <form>
                <div className="form-group height-fix">
                  <label htmlFor="contact-info">Your Info</label>
                  <input type="text" className="form-control kiip-inline" id="contact-name" placeholder="Your name" />
                  <input type="email" className="form-control kiip-inline pull-right" id="contact-email" placeholder="Email address" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Your Message</label>
                  <select className="form-control">
                    <option>Select Option</option>
                  </select>
                  <textarea className="form-control" placeholder="Leave us a message!"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-block">Send Message</button>
              <button type="button" className="btn kiip-btn-link btn-block" data-dismiss="modal">Cancel and close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Modal;
