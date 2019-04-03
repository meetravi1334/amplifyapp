'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const e = React.createElement;

class ButtonLike extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// ... the starter code you pasted ...

//const domContainer = document.querySelector('#like_button_container');
//ReactDOM.render(e(LikeButton), domContainer);
export default ButtonLike;
