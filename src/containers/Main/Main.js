import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './../../components/Home/Home';
import News from './../../components/News/News';
import Error404 from './../../components/Error404/Error404';
import Toaster from './../../components/Toaster/Toaster';
import './Main.scss';

//REDUX
import { connect } from 'react-redux';
import * as actions from '../../store/actions';



import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';

class Main extends Component {

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.props.closeToast();
    };


    componentDidMount() {
        const toaster = this.props.toaster;
        let icon;
        
    }

    render() {

        const toaster = this.props.toaster;
        const icone =  <CheckCircleIcon />;


        return (
            <main id="main-content">
                <section id="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/actualites" component={News} />
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
                    autoHide={10000} />

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
  
  export default  connect(mapStateToProps, mapDispatchToProps)(Main);