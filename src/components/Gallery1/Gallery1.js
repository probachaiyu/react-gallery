import Gallery from 'react-photo-gallery';
import React, {Component} from 'react';
import Lightbox from 'react-images';

const photos = [
  {src: require('../../static/winter/1.jpg'), width:3, height:4},
  {src: require('../../static/winter/2.jpg'), width:3, height:4},
  {src: require('../../static/winter/3.jpg'), width:1, height:1},
  {src: require('../../static/winter/4.jpg'), width:3, height:4},
  {src: require('../../static/winter/5.jpg'), width:3, height:4},
  {src: require('../../static/winter/6.jpg'), width:3, height:4},
  {src: require('../../static/winter/7.jpg'), width:3, height:4},
];



const Checkmark = ({selected}) => (
  <div style={selected ? {left: '4px', top: '4px',position: 'absolute', zIndex:'1'} : {display: 'none'}}>
    <svg style={{fill: 'white', position: 'absolute'}} width="24px" height="24px">
      <circle cx="12.5" cy="12.2" r="8.292"></circle>
    </svg> 
    <svg style={{fill: '#06befa', position: 'absolute'}} width="24px" height="24px">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
    </svg>
  </div>
);

const imgStyle = {  
  display: 'block', 
  transition: 'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s'
};
const selectedImgStyle = { 
  transform: 'translateZ(0px) scale3d(0.9, 0.9, 1)',
  transition: 'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s'
};
const cont = {
  backgroundColor: '#eee',
  cursor: 'pointer',
  overflow: 'hidden',
  float: 'left',
  position: 'relative'
}

const SelectedImage = ({ index, onClick, photo, margin}) => {
  //calculate x,y scale
  const sx = (100 - ((30 / photo.width) * 100)) / 100;
  const sy = (100 - ((30 / photo.height) * 100)) / 100;
  selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;
  return (
    <div style={{margin, width:photo.width, ...cont}} className={'cont' + (!photo.selected ? ' selected' : '')}>
      
      <Checkmark selected={photo.selected ? true: false}/>
      <img style={photo.selected ? {...imgStyle, ...selectedImgStyle} : {...imgStyle}} {...photo} onClick={(e) => onClick(e, {index, photo})} />
      
      <style>
      {`.cont.selected:hover{outline:2px solid #06befa}`}
      </style>
    </div>
  )
};



export default class Gallery1 extends Component{
  constructor(props){             
    super(props);                 
    this.state = { currentImage: 0, photos: photos, selectAll: false }; 
    this.closeLightbox = this.closeLightbox.bind(this); 
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.selectPhoto = this.selectPhoto.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);

  }
  openLightbox(event, obj) {
    console.log('open')
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });  
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    }); 
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,                                                           
    });  
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,                                            
    }); 
  }

selectPhoto(event, obj){
    let photos = this.state.photos;
    photos[obj.index].selected = !photos[obj.index].selected;
    this.setState({photos: photos});
  }
  toggleSelect(){
    let photos = this.state.photos.map((photo,index)=> { return {...photo, selected: !this.state.selectAll}});
    this.setState({photos: photos, selectAll: !this.state.selectAll});
  }

  render(){
    return(
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
        <hr/>
      <Gallery photos={photos} onClick={this.selectPhoto} ImageComponent={SelectedImage} />
      </div>
    )
  }
}