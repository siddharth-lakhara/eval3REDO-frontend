import React, { Component } from 'react';
import './sidebar.css';

class SideBar extends Component {
  save() {
    console.log('save called');
  }

  render() {
    return (
      <div className="sideBar">
                Bs
        <button className="sideBar-sync" onClick={this.save}>SYNC</button>
      </div>
    );
  }
}

export default SideBar;
