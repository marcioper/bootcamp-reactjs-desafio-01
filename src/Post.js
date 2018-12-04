import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = ({ data }) => (
  <div className="timeline-wrapper">
    <div className="post-list">
      <PostHeader avatar={data.avatar} name={data.name} lastUpdate={data.lastUpdate} />
      <hr />
      {data.content}
    </div>
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    lastUpdate: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
