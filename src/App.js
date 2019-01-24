import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import News from './components/News/News';
import Error404 from './components/Error404/Error404';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans:400','PT Sans Narrow:700', 'sans-serif']
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/actualites" component={News} />
                <Route component={Error404} />
              </Switch>
            </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
