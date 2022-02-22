import React, { Component } from 'react';
import './home.css';
import Header from '../../components/header';
import Main from '../../components/main';


class Home extends Component {
  render() {
    return (
      <body>
        <Header />
        <Main />
      </body>
    );
  }

}

export default Home;
