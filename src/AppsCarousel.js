import React from "react";
import "./App.css";
import bantLogo  from "./logo-bant.svg";
import medlyLogo from "./MedlyS.png";
import iccLogo    from "./ICC.JPG";
import nedLogo   from "./NEd.JPG";
import baLogo    from "./BA.JPG";
import MedlyPage from './MedlyPage'
import Carousel from "nuka-carousel";

class AppsCarousel extends React.Component {
  render(props) {
    const logos = [
      {src: medlyLogo, url: 'https://apps.ehealthinnovation.org/medly'},
      {src: nedLogo, url: 'https://apps.ehealthinnovation.org/ned'},
      {src: bantLogo, url: 'https://apps.ehealthinnovation.org/bant'},
      {src: iccLogo, url: 'https://apps.ehealthinnovation.org/icc'},
      {src: baLogo, url: 'https://apps.ehealthinnovation.org/breatheagain'},
    ]


    return (
      <div className="App-wrapper">
        <Carousel autoplay={true} wrapAround={true} autoplayInterval={3000} dragging={false}>
        {logos.map((pageObject) => <img onClick={() => window.open(pageObject.url)} src={pageObject.src} className="logo-carousel" />  )}
        </Carousel>
      </div>
    );
  }
}

export default AppsCarousel;
