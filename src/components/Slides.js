import React, { Component } from "react";
import "../Styles/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import '../slick-1.8.1/slick/slick.css'


import Photo1 from '../images/231-960x350.jpg';
import Photo2 from '../images/232-960x350.jpg';
import Photo3 from '../images/233-960x350.jpg';
import Photo4 from '../images/238-960x350.jpg';
import Photo5 from '../images/239-960x350.jpg';


const photos = [
  {
    name: "Photo 1",
    url: Photo1,
  },
  {
    name: "Photo 2",
    url: Photo2,
  },
  {
    name: "Photo 3",
    url: Photo3,
  },
  {
    name: "Photo 4",
    url: Photo4,
  },
  {
    name: "Photo 5",
    url: Photo5,
  },
];

class Slides extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinte: true,
      speed: 500,
      slidesToShow: 1,
      arrows: false,
      slidesToScroll: 1,
      className: "main-img",
    };

    return (
      
      <div className="main-img">
        <Slider {...settings}>
          {photos.map(photo => {
            return (
              <div>
                <img width="100%" height="100%" src={photo.url} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Slides;
