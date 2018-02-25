import React, { Component } from 'react';
import { connect } from 'react-redux';
import { load } from './redux/actions';

import './App.css';
import SideBar from './components/sidebar/sidebar';
import RightPane from './components/rightPane';

class App extends Component {
  componentDidMount() {
    fetch('/read')
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        this.props.loadBooks(response);
      });
  }

  render() {
    return (
      <div className="App-Container">
        <SideBar />
        <RightPane />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  booksStorage: state.booksState.booksStorage,
});

const mapDispatchToProps = dispatch => ({
  loadBooks: (response) => { dispatch(load(response)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
