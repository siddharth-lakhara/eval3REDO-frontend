import React, { Component } from 'react';
import BookCard from './bookCard';

class AuthorCard extends Component {
  render() {
    const booksArray = this.props.authorBooksArray;
    console.log("Book by author: ",this.props.authorBooksArray);
    return (
      Object.keys(booksArray).map(BookElem => (
        <BookCard
          className="bookCard-display"
          Name={booksArray[BookElem].Name}
          rating={booksArray[BookElem].rating}
          like={booksArray[BookElem].like}
          author={this.props.author}
          bookId={booksArray[BookElem].books_id}
        />
      ))
    );
  }
}

export default AuthorCard;


// Object.keys(bookObject[authorProp]).map(BookElem => (
//     <div>{authorProp}</div>
//     <BookCard
//         Name={bookObject[authorProp][BookElem].Name}
//         rating={bookObject[authorProp][BookElem].rating}
//         // like
//         like={bookObject[authorProp][BookElem].like}
//         author={authorProp}
//     />
