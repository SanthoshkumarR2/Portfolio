import React from "react";
import image1 from "../Project/Social-Media.png";
import image2 from "../Project/Santhosh-Pizza.png";
import image3 from "../Project/Santhosh-Chat.png";
import image4 from "../Project/Santhosh-Blog.png";


function Project() {
  const openLink = (link) => {
    window.open(link, '_blank');
  }
  
  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <main id="main">
              <section id="portfolio" className="portfolio section-bg">
                <div className="container">
                  <div className="section-title mb-4">
                    <h2>Project</h2>
                  </div>

                  <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-3 col-md-6 mb-5">
                      <div className="card p-3" id="card">
                        <img
                          src={image1}
                          alt="Santhosh SantaGram"
                          className="card-img-top shadow bg-white rounded"
                        />
                        <div className="card-body" id="card-body">
                          <h5 className="card-title">Social Media</h5>
                          <p className="card-text">
                            It is a Social Media App which includes Login,
                            Register, Post, Likes and Comments named as SantaGram
                          </p>
                          <button className="btn btn-outline-dark" onClick={() => openLink('https://santhosh-socialmedia.vercel.app')}>
                            Live
                          </button>
                          <button className="btn btn-outline-dark" onClick={() => openLink('https://github.com/SanthoshkumarR2/Social-Media-Frontend.git')}>
                            Github
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-5">
                      <div className="card p-3" id="card">
                        <img
                          src={image2}
                          alt="Santhosh Pizza"
                          className="card-img-top shadow bg-white rounded"
                        />
                        <div className="card-body" id="card-body">
                          <h5 className="card-title">Pizza Delivery</h5>
                          <p className="card-text">
                            It's a Pizza Delivery App which includes Login,
                            Register, Order, Admin and Payment method also available.
                          </p>
                          <button className="btn btn-outline-dark" onClick={() => openLink('https://santhosh-pizza-delivery.vercel.app/')}>
                            Live
                          </button>
                          <button className="btn btn-outline-dark" onClick={() => openLink('https://github.com/SanthoshkumarR2/Santhosh-Pizza-Delivery-FrontEnd.git')}>
                            Github
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-5">
                      <div className="card p-3" id="card">
                        <img
                          src={image3}
                          alt="Santhosh Url's"
                          className="card-img-top shadow bg-white rounded"
                        />
                        <div className="card-body" id="card-body">
                          <h5 className="card-title">
                            Chat App
                          </h5>
                          <p className="card-text">
                            It's a Chat App like User can use it as Real-time Messaging Conversation with Other Users.
                          </p>
                          <button className="btn btn-outline-dark" onClick={() => openLink('https://santhosh-chat-app.onrender.com')}>
                            Live
                          </button>
                          <button className="btn btn-outline-dark" onClick={() => openLink('https://github.com/SanthoshkumarR2/Santhosh-Chat-App.git')}>
                            Github
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-5">
                      <div className="card p-3" id="card">
                        <img
                          src={image4}
                          alt="Project 4"
                          className="card-img-top shadow bg-white rounded"
                        />
                        <div className="card-body" id="card-body">
                          <h5 className="card-title">Blog App</h5>
                          <p className="card-text">
                          It's a Blog App which is like User can upload their blog and aslo view others uploaded blogs.
                          </p>
                          <button className="btn btn-outline-dark" onClick={() => openLink('https://santhosh-blogs-app.vercel.app')}>
                            Live
                          </button>
                          <button className="btn btn-outline-dark" onClick={() => openLink('https://github.com/SanthoshkumarR2/Santhosh-Blog-App.git')}>
                            Github
                          </button>
                        </div>
                      </div>
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

export default Project;
