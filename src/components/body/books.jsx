import React, { Component } from 'react';
import './books.css';
import DisplayBooks from './displayBooks';

class Books extends Component {
  render() {
    return (
      <div className="books-contentsPane">
        <DisplayBooks />
      </div>
    );
  }
}

export default Books;
