import React, {Component} from 'react';
import Gallery1 from 'react-grid-gallery';
import PropTypes from 'prop-types';

export default class Gallery5 extends Component {
  constructor(props){
        super(props);
        this.state = {
            images: this.props.images
        };
    }

    setCustomTags (i) {
        return (
            i.tags.map((t) => {
                return (<div
                        key={t.value}
                        style={customTagStyle}>
                        {t.title}
                        </div>);
            })
        );
    }


    render () {
        var images =
                this.state.images.map((i) => {
                    i.customOverlay = (
                            <div style={captionStyle}>
                            <div>{i.caption}</div>
                            {i.hasOwnProperty('tags') &&
                             this.setCustomTags(i)}
                        </div>);
                    return i;
                });


        return (
                <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    border: "1px solid #ddd",
                    overflow: "auto"}}>
                <Gallery1
            images={images}
            enableImageSelection={true}
            rowHeight={400} 
            backdropClosesModal={true}
            />
                </div>
        );
    }
}

Gallery5.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.string,
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired
        })
    ).isRequired
};

const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: "540px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
    padding: "2px",
    fontSize: "90%"
};

const customTagStyle = {
    wordWrap: "break-word",
    display: "inline-block",
    backgroundColor: "white",
    height: "auto",
    fontSize: "75%",
    fontWeight: "600",
    lineHeight: "1",
    padding: ".2em .6em .3em",
    borderRadius: ".25em",
    color: "black",
    verticalAlign: "baseline",
    margin: "2px"
};

Gallery5.defaultProps = {
    images: [
        {
            src: require('../../static/way/1.jpg'),
            thumbnail: require('../../static/way/1.jpg'),
            thumbnailWidth: 371,
            thumbnailHeight: 500,
            tags: [{value: "Nature", title: "Nature | Stones"}],
            caption: "Nature Way"
        },
        {
            src: require('../../static/way/2.jpg'),
            thumbnail: require('../../static/way/2.jpg'),
            thumbnailWidth: 420,
            thumbnailHeight: 500,
            tags: [{value: "Way", title: "Way"},
                   {value: "Forrest", title: "Forrest"}],
            caption: "Forrest way"
        },
        {
            src: require('../../static/way/3.jpg'),
            thumbnail: require('../../static/way/3.jpg'),
            thumbnailWidth: 420,
            thumbnailHeight: 500,
            tags: [{value: "Mountain", title: "Mountain"},
                   {value: "Way", title: "Way"},
                   ],
            caption: "Mountain way"
        },
        {
            src: require('../../static/way/4.jpg'),
            thumbnail: require('../../static/way/4.jpg'),
            thumbnailWidth: 420,
            thumbnailHeight: 500,
            caption: "Night way"
        },
        {
            src: require('../../static/way/5.jpg'),
            thumbnail: require('../../static/way/5.jpg'),
            thumbnailWidth: 348,
            thumbnailHeight: 500,
            caption: "Snow way"
        },
        {
            src: require('../../static/way/6.jpg'),
            thumbnail: require('../../static/way/6.jpg'),
            thumbnailWidth: 350,
            thumbnailHeight: 500,
            tags: [{value: "Village", title: "Village"},
                   {value: "Way", title: "Way"}],
            caption: "Village Way"
        },
        {
            src: require('../../static/way/7.jpg'),
            thumbnail: require('../../static/way/7.jpg'),
            thumbnailWidth: 420,
            thumbnailHeight: 500,
            tags: [{value: "Way", title: "Way"},
                   {value: "Industrial", title: "Industrial"}],
            caption: "Industrial Way"
        }
    ]
}

