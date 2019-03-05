import React, { Component } from 'react';
import Blink from 'react-blink';

class Link extends Component {
  render() {
    return (

        <a href={this.props.where}> <h1>[ {this.props.what} ] </h1> </a>
    );
  }

  }

export default Link;
