import React, { Component } from 'react';
import './rightpane.css';
import Header from './header/header';
import Books from './body/books';

class RightPane extends Component {
  render() {
    return (
      <div className="RightPane-Container" >
        <Header />
        <Books />
      </div>
    );
  }
}

export default RightPane;

