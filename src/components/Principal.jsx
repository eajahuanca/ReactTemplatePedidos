import React, { Component } from 'react';
import Header from './estructura/Header';
import SideBar from './estructura/SideBar';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <SideBar />
      </div>
    );
  }
}

export default App;