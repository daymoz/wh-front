import React, { Component, Fragment } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import './DialogBox.scss';

import Auth from './../Auth/Auth';

class DialogBox extends Component {

    handleClose = () => {
        this.props.onClose(false);
    };

    render() {
        return (
            <Fragment>
                <Dialog
                    open={this.props.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    className="custom-modal"
                >
                <DialogContent className="custom-modal-content">
                    <Auth tabIndex={this.props.tabIndex} />
                </DialogContent>
                </Dialog>
            </Fragment>
        );
    }
  }
  
  export default DialogBox;