import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ avatar, name, lastUpdate }) => (
  <div className="post-header">
    <img src={avatar} alt="user" />
    <div className="author">
      <strong>{name}</strong>
      <br />
      <span>{lastUpdate}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  lastUpdate: PropTypes.string.isRequired,
};

export default PostHeader;
