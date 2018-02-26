import React, { Component } from 'react';
import { connect } from 'react-redux';
import './sidebar.css';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
  }

  save() {
    const booksArray = this.props.booksStorage;
    const booksToSend = [];
    Object.keys(booksArray).map((authorArray) => {
      Object.keys(booksArray[authorArray]).map((books) => {
        console.log(booksArray[authorArray][books].books_id);
        booksToSend.push({
          booksId: booksArray[authorArray][books].books_id,
          likes: booksArray[authorArray][books].like,
        });
      });
    });

    fetch('/save', {
      method: 'POST',
      body: JSON.stringify(booksToSend),
    });
  }

  render() {
    return (
      <div className="sideBar">
        <div className="sideBar-text">
                Bs
        </div>
        <div className="sidebar-settings">
          <i className="material-icons" onClick={this.save}>refresh</i>
          <i className="material-icons">settings</i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  booksStorage: state.booksState.booksStorage,
});

export default connect(mapStateToProps, null)(SideBar);
