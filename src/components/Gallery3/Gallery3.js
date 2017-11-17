import React, { Component } from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
var Carousel22 = require('react-responsive-carousel').Carousel;

const photos = [
{src: require('../../static/flowers/1.jpg')},
{src: require('../../static/flowers/2.jpg')},
{src:require('../../static/flowers/3.jpg')},
{src:require('../../static/flowers/4.jpg')},
{src:require('../../static/flowers/5.jpg')},
{src:require('../../static/flowers/6.jpg')},
];

export default class Gallery3 extends Component {
  render() {
    return (
        <Carousel22 centerMode infiniteLoop autoPlay emulateTouch >
        {photos.map((photo, index)=>
          <div>
          <img src={photo.src} />
          <p className="legend"> Photo {index} </p>
          </div>
          
          )
      }
          </Carousel22>
          );
    }
}