/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Faq from "./components/faq";
import Footer from "./components/footer";
//import Gallery from "./components/gallery";
import Header from "./components/header";
import Hero from "./components/hero";
import Hotels from "./components/hotels";
import Schedule from "./components/schedule";
import Speaker from "./components/speaker";
import Subscribe from "./components/subscribe";
import Supporters from "./components/supporters";
import Ticket from "./components/ticket";
import Venue from "./components/venue";

function App() {
  const [backtoTop, setbacktoTop] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 100) {
      setbacktoTop(true);
    } else {
      setbacktoTop(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Speaker />
        <Schedule />
        <Venue />
        <Hotels />
        {/* <Gallery /> */}
        <Supporters />
        <Faq />
        <Subscribe />
        <Ticket />
        <Contact />
      </main>
      <Footer />
      <a
        href="#"
        className={
          backtoTop
            ? "back-to-top d-flex align-items-center justify-content-center active"
            : "back-to-top d-flex align-items-center justify-content-center"
        }
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default App;
