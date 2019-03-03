import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Main from './containers/Main/Main';

import { BrowserRouter as Router } from 'react-router-dom';

import WebFont from 'webfontloader';

import * as moment from 'moment';
import localization from 'moment/locale/fr';

import { withCookies } from 'react-cookie';

import './App.scss';


WebFont.load({
  google: {
    families: ['Open Sans:400','Roboto Condensed:300,400,700', 'sans-serif']
  }
});

moment.updateLocale('fr', localization);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default withCookies(App);
