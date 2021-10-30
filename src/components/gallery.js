import React from "react";

function Gallery() {
  return (
    <section id="gallery">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Gallery</h2>
          <p>Check our gallery from the recent events</p>
        </div>
      </div>

      <div className="gallery-slider swiper">
        <div className="swiper-wrapper align-items-center">
          <div className="swiper-slide">
            <a href="assets/img/gallery/1.jpg" className="gallery-lightbox">
              <img
                src="assets/img/gallery/1.jpg"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="assets/img/gallery/2.jpg" className="gallery-lightbox">
              <img
                src="assets/img/gallery/2.jpg"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="assets/img/gallery/3.jpg" className="gallery-lightbox">
              <img
                src="assets/img/gallery/3.jpg"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="assets/img/gallery/4.jpg" className="gallery-lightbox">
              <img
                src="assets/img/gallery/4.jpg"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="assets/img/gallery/5.jpg" className="gallery-lightbox">
              <img
                src="assets/img/gallery/5.jpg"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="assets/img/gallery/6.jpg" className="gallery-lightbox">
              <img
                src="assets/img/gallery/6.jpg"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="assets/img/gallery/7.jpg" className="gallery-lightbox">
              <img
                src="assets/img/gallery/7.jpg"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
          <div className="swiper-slide">
            <a href="assets/img/gallery/8.jpg" className="gallery-lightbox">
              <img
                src="assets/img/gallery/8.jpg"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Gallery;
