import React from 'react';

function Contact() {
  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <main id="main">
              <section id="contact" className="contact">
                <div className="container">

                  <div className="section-title">
                    <h2>Contact</h2>
                  </div>

                  <div className="row" data-aos="fade-in">

                    <div className="col-lg-5 d-flex align-items-stretch">
                      <div className="info">
                        <div className="email">
                          <i className="fa fa-envelope"></i>
                          <h4>Email:</h4>
                          <p><a href="mailto:santhoshkumarstudy@gmail.com">santhoshkumarstudy@gmail.com</a></p>
                        </div>

                        <div className="phone">
                          <i className="fa fa-phone"></i>
                          <h4>Call:</h4>
                          <p><a href="tel:+919360626663">+91-9360626663</a></p>
                        </div>

                        <div className="github">
                          <i className="fa-brands fa-github"></i>
                          <h4>Github</h4>
                          <p style={{ textAlign: "justify", fontSize: "13px" }}>
                            <a href="https://github.com/SanthoshkumarR2" target="_blank" rel="noopener noreferrer">
                              https://github.com/SanthoshkumarR2
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                      <form role="form" className="mail-form">
                        <div className="row">
                          <div className="form-group col-md-6">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name="name" className="form-control" id="name" required />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" className="form-control" name="email" id="email" required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="subject">Subject</label>
                          <input type="text" className="form-control" name="subject" id="subject" required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="message">Message</label>
                          <textarea className="form-control" name="message" rows="10" required></textarea>
                        </div>
                        <div className="my-3">
                          <div className="loading">Loading</div>
                          <div className="error-message"></div>
                          <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-success">Send Message</button>
                        </div>
                      </form>
                    </div>

                  </div>

                </div>
              </section>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
