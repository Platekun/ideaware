import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import $ from 'jquery/src/jquery';

const embedVideos = () => $('.ui.embed').embed();

class VideoListItem extends Component {
  render() {
    const { props } = this;

    return (
      <li className="column">
        <LazyLoad height="auto" onContentVisible={embedVideos}>
          <div className="ui embed" data-source="youtube" data-id={props.video.id} data-placeholder={props.video.thumbnails.high.url} />
        </LazyLoad>
      </li>
    );
  }
}

VideoListItem.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoListItem;
