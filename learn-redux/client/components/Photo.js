import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import posts from '../data/posts';

export const Photo = React.createClass({
  render() {
    const { caption, code, likes, } = this.props.post;
    console.log(this.props.comments[code]);

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${code}`} >
            <img
              src={this.props.post.display_src}
              alt={caption}
              className="grid-photo"
            />
          </Link>
          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={likes} className="likes-heart">{likes}</span>
          </CSSTransitionGroup>
        </div>
        <figcaption>
          <p>
            {caption}
          </p>
          <div className="control-buttons">
            <button className="likes">&hearts; {likes}</button>
            <Link to={`/view/${code}`} className="button">
              <span className="comment-count">
                <span className="speech-bubble" /> {this.props.comments[code] ? this.props.comments[code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure >
    )
  }
});