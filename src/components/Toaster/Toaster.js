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

const style = {
    class: 'status-icon',
}
class Toaster extends Component {

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.props.onClose();
    };

    componentDidMount() {
        
    }

    render() {

        let icon = '';
        switch(this.props.variant) {
            case 'success':
                icon = <CheckCircleIcon className={style.class} />;
                break;
            case 'info':
                icon = <InfoIcon className={style.class} />;
                break;
            case 'error':
                icon = <ErrorIcon className={style.class} />;
                break;
            default:
                break;
        }
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
                    message={<span>{icon} {this.props.message}</span>}
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


