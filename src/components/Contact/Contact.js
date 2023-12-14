import React from 'react';
import ContactImg from '../../Assets/Programmer-bro.svg'
function Contact() {
  return (
    <div>
        <section className='about-section'>
        <div className="content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">

            <div className="row justify-content-center">
              <div className="col-md-6">

                <p><img src={ContactImg} alt="Image" className="img-fluid" /></p>

              </div>
              <div className="col-md-6">
              <h3 className="heading mb-4"><span className='purple'>Let's</span> talk <span className='purple'>about</span> everything!</h3>

                <form className="mb-5" method="post" id="contactForm" name="contactForm">
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input type="text" className="form-control" name="name" id="name" placeholder="Your name" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input type="text" className="form-control" name="email" id="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <textarea className="form-control" name="message" id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <input type="submit" value="Send Message" className="btn btn-primary rounded-0 py-2 px-4" />
                      <span className="submitting"></span>
                    </div>
                  </div>
                </form>

                <div id="form-message-warning mt-4"></div>
                <div id="form-message-success">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>
    </div>
  );
}

export default Contact;
