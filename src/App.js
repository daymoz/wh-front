import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import News from './components/News/News';
import Error404 from './components/Error404/Error404';
import WebFont from 'webfontloader';

import { withCookies } from 'react-cookie';

import './App.scss';
import FullPageContent from './containers/FullPageContent/FullPageContent';


WebFont.load({
  google: {
    families: ['Open Sans:400','Roboto Condensed:300,400,700', 'sans-serif']
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/actualites" component={News} />
                <Route exact path="/:contentType/:id" component={FullPageContent} />
                <Route component={Error404} />
              </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default withCookies(App);
