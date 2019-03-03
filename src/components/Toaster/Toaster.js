import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';


//MAterial-UI
import IconButton from '@material-ui/core/IconButton';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';

import './Toaster.scss';

class Toaster extends Component {

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.props.onClose();
    };

    render() {

        let icon = '';
        let message = '';
        console.log(this.props.variant);
        
        console.log(message);

        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={this.props.open}
                autoHideDuration={this.props.autoHide}
                onClose={this.handleClose}
            >
                <SnackbarContent
                    onClose={this.handleClose}
                    className={this.props.variant}
                    message={this.props.message}
                    action={[
                        <IconButton
                          key="close"
                          aria-label="Close"
                          color="inherit"
                          onClick={this.handleClose}
                        >
                          <CloseIcon />
                        </IconButton>,
                      ]}
                />
            </Snackbar>
        );
    }
  }
  export default Toaster;


