import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NoBooks.css';
import { load } from '../../redux/actions';

class NoBooks extends Component {
  constructor(props) {
    super(props);
    this.loadBooks = this.loadBooks.bind(this);
  }

  loadBooks() {
    fetch('/updatedb').then(() => {
      // fetch('/read').then(response => response.json())
      // .then((response) => {
      //   this.props.loadBooks(response);
      //   this.props.changeState();
      // });
    });
  }

  render() {
    return (
      <div className="NoBooks-main" >
        <div>OOps! No Books Found</div>
        <img
          className="refresh-image"
          src={require('./refresh.png')}
          alt="refresh image"
          onClick={this.loadBooks}
        />
      </div>);
  }
}

const mapDispatchToProps = dispatch => ({
  loadBooks: () => { dispatch(load()); },
});

export default connect(null, mapDispatchToProps)(NoBooks);
