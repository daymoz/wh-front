import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './../../components/Home/Home';
import News from './../../components/News/News';
import Error404 from './../../components/Error404/Error404';
import './Main.scss';

class Main extends Component {
    render() {
        return (
            <main id="main-content">
                <section id="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/actualites" component={News} />
                        <Route component={Error404} />
                    </Switch>
                </section>
            </main>
        );
    }
  }
  
  export default Main;