import React, { Component, Fragment } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { connect } from 'react-redux';

import Logo from '../../components/Logo/Logo';

import './DialogBox.scss';

import Auth from './../Auth/Auth';

import * as actions from '../../store/actions/index';

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

                    <div className="top-modal">
                        <Logo onClick={this.handleClose} />
                    </div>
                    <Auth tabIndex={this.props.tabIndex} />
                </DialogContent>
                </Dialog>
            </Fragment>
        );
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        closeDialogBox: () => dispatch(actions.dialogBoxClose()),
    };
}
  
  export default connect(mapDispatchToProps)(DialogBox);