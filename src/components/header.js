import React, { useState } from "react";

function Header() {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <header
      id="header"
      className={
        header
          ? "d-flex align-items-center header-scrolled"
          : "d-flex align-items-center"
      }
    >
      <div className="container-fluid container-xxl d-flex align-items-center">
        <div id="logo" className="me-auto">
          {/* <a href="index.html" className="scrollto">
            <img src="assets/img/logo.png" alt="" title="" />
          </a> */}
          <h1>
            <a href="index.html">
              The<span>Event</span>
            </a>
          </h1>
        </div>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a className="nav-link scrollto" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#speakers">
                Speakers
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#schedule">
                Schedule
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#venue">
                Venue
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#hotels">
                Hotels
              </a>
            </li>
            {/* <li>
              <a className="nav-link scrollto" href="#gallery">
                Gallery
              </a>
            </li> */}
            <li>
              <a className="nav-link scrollto" href="#supporters">
                Sponsors
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* <a className="buy-tickets scrollto" href="#buy-tickets">
          Buy Tickets
        </a> */}
      </div>
    </header>
  );
}

export default Header;
