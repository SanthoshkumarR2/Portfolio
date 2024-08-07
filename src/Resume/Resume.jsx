import React from 'react';

function Resume() {
  const resumeLink = 'https://drive.google.com/file/d/1kCFvnHMSVMMCIlJ1QknhzTxE8GOJUbVW/view?usp=sharing'; // Replace with your actual resume link

  const handleDownloadClick = () => {
    window.open(resumeLink, '_blank');
    // If you want to open the link in the same window, use:
    // window.location.href = resumeLink;
  };

  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <main id="main">
              <section id="resume" className="portfolio section-bg">
                <div className="container">
                  <div className="section-title">
                    <h2>Resume</h2>
                  </div>

                  <div className="row">
                    <div className="col-lg-12 p-3">
                      <div className="card" id='card' style={{ width: "16rem" }}>
                        {/* Replace the src attribute with the path to your image */}
                        <img src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" className="card-img-top" alt="Santhosh Resume" />
                        <div className="card-body d-flex justify-content-center">
                          <button className='btn btn-success ' onClick={handleDownloadClick}>
                            Download
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

export default Resume;
