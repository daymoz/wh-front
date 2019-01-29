import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import News from './components/News/News';
import Error404 from './components/Error404/Error404';
import WebFont from 'webfontloader';
import './App.scss';


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
                <Route component={Error404} />
              </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
