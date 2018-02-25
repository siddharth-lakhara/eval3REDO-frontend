import React, { Component } from 'react';
import { connect } from 'react-redux';
import './rightpane.css';
import Header from './header/header';
import Books from './body/books';
import NoBooks from './body/NoBooks';

const RightPane = (props) => {
  const books = props.booksStorage;
  if (Object.keys(books).length === 0) {
    return (
      <div className="RightPane-Container" >
        <Header />
        <NoBooks />
      </div>
    );
  }

  return (
    <div className="RightPane-Container" >
      <Header />
      <Books />
    </div>
  );
};

const mapStateToProps = state => ({
  booksStorage: state.booksState.booksStorage,
});

export default connect(mapStateToProps)(RightPane);

