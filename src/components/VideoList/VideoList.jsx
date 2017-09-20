import React from 'react';
import PropTypes from 'prop-types';
import VideoListItem from '../VideoListItem';
import uuid from 'uuid';
import './VideoList.css';

const renderVideos = (videos) => (
  videos.map((video) => (
    <VideoListItem key={uuid()} video={video} />
  ))
);

const VideoList = (props) => {
  const result = props.videos
    ? (props.videos.length
      ? <ul className="ui three column stackable grid video-catalog__list">
        {renderVideos(props.videos)}
      </ul>
      : <h3 className="video-catalog__message">No Videos found :(</h3>
    )
    : <h3 className="video-catalog__message">Type on the search box to find videos.</h3>;

  return result;
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object)
};

export default VideoList;
