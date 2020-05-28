import React, { Component } from "react";
import "../Styles/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const photos = [
  {
    name: 'Photo 1',
    url: '../images/231-960x350.jpg'
  },
  {
    name: 'Photo 2',
    url: '../images/232-960x350.jpg'
  },
  {
    name: 'Photo 3',
    url: '../images/233-960x350.jpg'
  },
  {
    name: 'Photo 4',
    url: '../images/238-960x350.jpg'
  },
  {
    name: 'Photo 5',
    url: '../images/239-960x350.jpg'
  },
]


class Slides extends Component {
  render() {
    const settings = {
      dots:true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "main-img"
    }

    return (
      <>
        <div class="main-img">
          <Slider {...settings} >
          {photos.map(photo => {
            return(
              <div>
                <img width="60%" height=" 50%"src='../images/239-960x350.jpg'/>
              </div>
            )
          })}

          </Slider>
        </div>
      </>
    );
  }
}

export default Slides;
