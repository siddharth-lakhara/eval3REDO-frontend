import React, { Component } from 'react';
import { connect } from 'react-redux';
import { save } from '../../redux/actions';
import './sidebar.css';

class SideBar extends Component {
  save() {
    this.props.saveCurrentState();
  }

  render() {
    return (
      <div className="sideBar">
        <div className="sideBar-text">
                Bs
        </div>
        <button className="sideBar-sync" onClick={this.save}>SYNC</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveCurrentState: () => { dispatch(save()); },
});

export default connect(null, mapDispatchToProps)(SideBar);
