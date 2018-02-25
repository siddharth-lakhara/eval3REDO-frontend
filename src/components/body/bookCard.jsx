import React, { Component } from 'react';
import { connect } from 'react-redux';
import { like, dislike } from '../../redux/actions';
import './bookCard.css';

class BookCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: (this.props.like === 0) ? 'grey' : 'red',
    };
    this.likeFunction = this.likeFunction.bind(this);
  }

  likeFunction(event) {
    const likeStatus = Number(event.target.value);
    const [books_id, author] = event.target.id.split(',');
    if (likeStatus) {
      this.props.dislikeFunction(author, Number(books_id));
    } else {
      this.props.likeFunction(author, Number(books_id));
      console.log(this.props.booksStorage);
    }
  }

  render() {
    console.log('BooksState: ', this.props.booksStorage);
    return (
      <div className="bookcard-main">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg"
          alt="BookImage"
          className="bookCard-image"
        />
        <img
          src={require('./like_icon1.png')}
          className="bookCard-like-img"
          alt="like book"
          onClick={this.likeFunction}
          style={{ background: this.state.color }}
          id={`${this.props.bookId},${this.props.author}`}
          value={this.props.like}
        />

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

const mapDispatchToProps = dispatch => ({
  likeFunction: (author, books_id) => { dispatch(like(author, books_id)); },
  dislikeFunction: (author, books_id) => { dispatch(dislike(author, books_id)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
