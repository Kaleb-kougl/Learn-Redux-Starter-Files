import React, { Component } from 'react';
import { Link } from 'react-router';
import { Photo } from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];
    const comments = this.props.comments[postId] || [];
    console.log(comments);
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={comments} {...this.props} />
      </div>
    );
  }
});

export default Single;