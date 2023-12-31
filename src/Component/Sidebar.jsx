import { useState } from "react";

function Sidebar() {
  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <i
        className="fa fa-list mobile-nav-toggle d-xl-none"
        onClick={handleChange}
      ></i>
      {/* <!-- Header --> */}
      <header id="header" className={toggle ? `show` : "hide"}>
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src={"../Img/Cover.jpg"}
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">Santhosh</h1>

            <div className="social-links mt-3 text-center">
              <a
                href="https://www.linkedin.com/in/santhoshkumarrv"
                target="_blank"
                className="linkedin"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                href="https://mail.google.com/mail/u/0/?hl=en-GB&tf=cm&fs=1&to=santhoshkumarstudy@gmail.com"
                target="_blank"
                className="google-plus"
              >
                <i className="fa fa-envelope"></i>
              </a>

              <a
                href="https://github.com/SanthoshkumarR2"
                target="_blank"
                className="github"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar mt-4 ms-2">
            <ul>
              <li>
                <a href="#hero" className="nav-link">
                  <i className="fa fa-home"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link">
                  <i className="fa fa-user"></i>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link">
                  <i className="fa fa-project-diagram"></i>
                  <span>Project</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link">
                  <i className="fa fa-file"></i>
                  <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  <i className="fa fa-contact-book"></i>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
}

export default Sidebar;
