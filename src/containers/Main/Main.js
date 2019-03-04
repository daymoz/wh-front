import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Home from './../../components/Home/Home';
import News from './../../components/News/News';
import Error404 from './../../components/Error404/Error404';
import Toaster from './../../components/Toaster/Toaster';
import PageContent from './../../containers/PageContent/PageContent';

import './Main.scss';

//REDUX
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Main extends Component {

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.props.closeToast();
    };


    componentDidMount() {
        
    }

    render() {

        const toaster = this.props.toaster;


        return (
            <main id="main-content">
                <section id="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/actualites" component={News} />
                        <Route exact path="/:contentType/:id" component={PageContent} />
                        <Route component={Error404} />
                    </Switch>
                </section>
                <Toaster 
                    onClose={this.handleClose} 
                    open={toaster.open} 
                    variant={toaster.messageType} 
                    message={
                        <span id="client-snackbar">
                            {this.icon}
                            {toaster.message}
                        </span>} 
                    autoHide={100000} />

            </main>
        );
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        openToast: () => dispatch(actions.openToast()),
        closeToast: () => dispatch(actions.closeToast())
    };
}

const mapStateToProps = (state) => ({
    toaster: state.toast,
})
  
  export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));