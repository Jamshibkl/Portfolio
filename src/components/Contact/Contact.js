import React from 'react';
import ContactImg from '../../Assets/Programmer-bro.svg'
import Particle from '../Particle';
function Contact() {
  return (

    

        <section className='contact-section' id='contact'>
            <Particle />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">

            <div className="row mr-2">
               <div className="col-md-6">
               

                <p><img src={ContactImg} alt="Image" className="img-fluid" /></p>

              </div>
              
              <div className="col-md-6">
           
              <h3 className="heading mb-4 white">CONTACT <span className='purple'>ME</span></h3>
              <p className='purple'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Exercitationem dolores nobis possimus velit corporis.</p>
                <form className="mb-5" method="post" id="contactForm" name="contactForm">
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input type="text" className="form-control rounded" name="name" id="name" placeholder="Your name" />
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
                      <input type="submit" value="Send Message" className="sub-btn btn-primary rounded py-2 px-4" />
                      <span className="submitting"></span>
                    </div>
                  </div>
                </form>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      </section>
   
  );
}

export default Contact;
