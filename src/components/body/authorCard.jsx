import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from './bookCard';

class AuthorCard extends Component {
  render() {
    const booksArray = this.props.authorBooksArray;
    console.log(this.props.authorBooksArray);
    return (
      Object.keys(booksArray).map(BookElem => (
        //   let index = Number(BookElem);
        <BookCard
          Name={booksArray[BookElem].Name}
          rating={booksArray[BookElem].rating}
          like={booksArray[BookElem].like}
          author={this.props.author}
          bookId={booksArray[BookElem].books_id}
        //   author={authorProp}
        />
      ))
    //   this.props.booksStorage[this.props.author].map(elem => <AuthorCard author={elem.author} />)
    );
  }
}

const mapStateToProps = state => ({
  booksStorage: state.booksState.booksStorage,
});

export default connect(mapStateToProps, null)(AuthorCard);


// Object.keys(bookObject[authorProp]).map(BookElem => (
//     <div>{authorProp}</div>
//     <BookCard
//         Name={bookObject[authorProp][BookElem].Name}
//         rating={bookObject[authorProp][BookElem].rating}
//         // like
//         like={bookObject[authorProp][BookElem].like}
//         author={authorProp}
//     />
