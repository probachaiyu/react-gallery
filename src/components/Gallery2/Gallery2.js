import React, {Component} from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Gallery.css';


const photos = [
  {src: require('../../static/cars/1.jpg')},
  {src: require('../../static/cars/2.jpg')},
  {src:require('../../static/cars/3.jpg')},
  {src:require('../../static/cars/4.jpg')},
  {src:require('../../static/cars/5.jpg')},
  {src:require('../../static/cars/6.jpg')},
];


 
export default class Gallery2 extends Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={500}
        totalSlides={6}
      >       
      <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> 
        <Slider className='slider'>

        {photos.map((photo, index)=>
          <Slide index={index}><img src={photo.src} />
          </Slide>)}
        </Slider>

        
      </CarouselProvider>
    );
  }
}