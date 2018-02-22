import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthorCard from './authorCard';
import './displayBooks.css';

class DisplayBooks extends Component {
  render() {
    const bookObject = this.props.booksStorage;
    return Object.keys(bookObject).map(authorProp => (
      <div>
        <div className="displayBook-author">
            Author: {authorProp}
        </div>
        <div className="displayBook-cardContainer">
          <AuthorCard
            authorBooksArray={bookObject[authorProp]}
            author={authorProp}
          />
        </div>
      </div>
    ));
  }
}

const mapStateToProps = state => ({
  booksStorage: state.booksState.booksStorage,
});

export default connect(mapStateToProps, null)(DisplayBooks);
