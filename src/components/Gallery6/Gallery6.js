import React, { Component } from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import './Gallery6.css';


export default class Gallery6 extends Component {
	constructor() {
		super();
		this.state = {
		};

		this.images = [
		{
			thumbnail: require('../../static/summer/1.jpg'),
			original: require('../../static/summer/1.jpg'),
			description: 'Render custom slides within the gallery',
			originalClass: 'original',
			sizes: "height=315"
		},
		{
			thumbnail: require('../../static/summer/2.jpg'),
			original: require('../../static/summer/2.jpg'),
			description: 'Render custom slides within the gallery',
			originalClass: 'original',
		},
		{
			thumbnail: require('../../static/summer/3.jpg'),
			original: require('../../static/summer/3.jpg'),
			description: 'Render custom slides within the gallery',
			originalClass: 'original',
		},
		{
			thumbnail: require('../../static/summer/4.jpg'),
			original: require('../../static/summer/5.jpg'),
			description: 'Render custom slides within the gallery',
			originalClass: 'original',
		},
		{
			thumbnail: require('../../static/summer/5.jpg'),
			original: require('../../static/summer/5.jpg'),
			description: 'Render custom slides within the gallery',
			originalClass: 'original',
		},
		{
			thumbnail: require('../../static/summer/6.jpg'),
			original: require('../../static/summer/6.jpg'),
			description: 'Render custom slides within the gallery',
			originalClass: 'original',
		}
		];
	}


render() {
	return (

		<section className='app'>
		<ImageGallery
		items={this.images}
		/>

		</section>
		);
	}
}