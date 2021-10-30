import React from "react";

function Subscribe() {
  return (
    <section id="subscribe">
      <div className="container" data-aos="zoom-in">
        <div className="section-header">
          <h2>Newsletter</h2>
          <p>Rerum numquam illum recusandae quia mollitia consequatur.</p>
        </div>

        <form method="POST" action="#">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Email"
              />
              <button type="submit" className="ms-2">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
