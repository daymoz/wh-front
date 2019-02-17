import React, { Component, Fragment } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Auth from './../Auth/Auth';

class DialogBox extends Component {

    state = {
        login: null,
    }

    handleClose = () => {
        this.props.onClose(false);
        console.log(this.props.boxContent);
    };

    render() {
        return (
            <Fragment>
                <Dialog
                open={this.props.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
                >
                <DialogTitle id="form-dialog-title">{this.props.boxContent.title}</DialogTitle>
                <DialogContent>
                    <Auth />
                </DialogContent>
                </Dialog>
            </Fragment>
        );
    }
  }
  
  export default DialogBox;