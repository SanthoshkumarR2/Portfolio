import React from 'react'

function About() {
  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <main id="main">
              <section id="about" className="about">
                <div className="container">

                  <div className="section-title">
                    <h2>About</h2>
                    <h3>Full Stack Web Developer.</h3>
                  </div>

                  <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                      <img src={"./Img/Santhosh DP.jpg"} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                      <p>Hey,<h3 className='text-black'> I'm Santhoshkumar,</h3> an aspiring developer with a Bachelor Degree in Computer Science.
                      I'am currently learning new skills with a vision of becoming better at what I do.
                      I like Web Development and to Create a new Interfaces.</p>
                      <p>
                      I design and build digital products and web applications.
                      </p>
                      <p>
                        I love to create web applications that would make life easy and enjoyable for people.
                        I have just completed <b>MERN Stack</b> at <b>GUVI Geeks</b> of IIT-M, Chennai.
                      </p>
                      <p>
                        I like to interact with new people , listen & think to new ideas.
                      </p>
                    </div>
                  </div>

                </div>
              </section>
            </main>
          </div>
        </div>
      </section>
    </>
  )
}

export default About