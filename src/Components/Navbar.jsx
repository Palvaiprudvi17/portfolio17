import React, { useState } from "react";
import "../StyledComponents/Navbar.css";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">Prudvi</div>
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hambox hamboxopen" : "hambox"}>
              <span className={navOpen ? "linetop spin " : "linetop"}></span>
              <span
                className={navOpen ? "linebottom spin" : "linebottom"}
              ></span>
            </div>
          </div>
        </div>

        {/* navbar overlay */}
        <div
          className="nav-overlay"
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <div>
            <ul className="nav-links">
              <li className="nav-item">
                <a
                  href="/"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "0.8s" : "0s",
                  }}
                >
                  Home
                </a>
                <div className="nav-item-wrapper"></div>
              </li>

              <li className="nav-item">
                <a
                  href="/projects"
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "0.9s" : "0s",
                  }}
                >
                  Projects
                </a>
                <div className="nav-item-wrapper"></div>
              </li>

              <li className="nav-item">
                <a
                  href="/about"
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "1s" : "0s",
                  }}
                >
                  About
                </a>
                <div className="nav-item-wrapper"></div>
              </li>

              <li className="nav-item">
                <a
                  href="/contact"
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "1.1s" : "0s",
                  }}
                >
                  Contact
                </a>
                <div className="nav-item-wrapper"></div>
              </li>
            </ul>
          </div>

          {/* creating footer and location */}
          <div className="nav-footer">
            <div
              className="location"
              style={{
                bottom: navOpen ? "0" : "-20px",
                opacity: navOpen ? "1" : "0",
                transitionDelay: navOpen ? "1.2s" : "0",
              }}
            >
              <span>Hyderabad , ON</span>
            </div>

            {/* social medial links */}
            <div className="nav-social-media">
              <ul>
                <li>
                  <a
                    href=""
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.3s" : "0",
                    }}
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.3s" : "0",
                    }}
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.3s" : "0",
                    }}
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
