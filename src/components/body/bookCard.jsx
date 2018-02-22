import React, { Component } from 'react';
import { connect } from 'react-redux';
import './bookCard.css';

class BookCard extends Component {
  likeFunction(event) {
    const likeStatus = Number(event.target.value);
    const books_id = Number(event.target.id);
    console.log(likeStatus, books_id);
    // this.props.likeFunction();
  }
  render() {
    return (
      <div className="bookcard-main">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg"
          alt="BookImage"
          height="150"
          width="100"
        />
        <button
          className="bookCard-like-img"
          onClick={this.likeFunction}
          value={this.props.like}
          id={this.props.bookId}
        >
          {this.props.like}
        </button>
        <div className="bookCard-name">{this.props.Name}</div>
        <div className="bookCard-rating">{this.props.rating}</div>
        <div className="bookCard-author">{this.props.author}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  booksStorage: state.booksState.booksStorage,
});

export default connect(mapStateToProps, null)(BookCard);
