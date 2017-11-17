import React, { Component } from 'react';

var Carousel4 = require('nuka-carousel');

const photos = [
    require('../../static/animals/1.jpg'),
    require('../../static/animals/2.jpg'),
    require('../../static/animals/3.jpg'),
    require('../../static/animals/4.jpg'),
    require('../../static/animals/5.jpg'),
    require('../../static/animals/6.jpg'),
];

export default class Gallery4 extends Component {
  mixins: [Carousel.ControllerMixin]
  render() {
    return (
      <Carousel4 autoplay 
      wrapAround 
      cellAlign = 'center'
      cellSpacing={30} 
      slidesToShow={1}
      slideWidth="300px">
       {photos.map((photo, index)=>
          <img src={photo} />
          )
      }
      </Carousel4>
    )
  }
}