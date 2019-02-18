import React, { Component } from 'react'

import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';

function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
  };

const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
    },
});

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementLabel: 'Votre e-mail',
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: false,
                touched: false
            },
            password: {
                elementLabel: 'Votre mot de passe',
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your password',
                    showPassword: false,
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                },
                valid: false,
                touched: false
            }
        },
        tabIndex: 0,
    }

    handleChange = prop => event => {
        this.setState({
            
        })
    };

    handleChange = (event, tabIndex) => {
        this.setState({ tabIndex });
    };
    
      handleChangeIndex = index => {
        this.setState({ tabIndex: index });
    };
    
    componentDidMount() {
        console.log(this.props);
        this.setState({
            tabIndex: this.props.tabIndex
        });
        console.log(this.state);
    }


    render() {

        const formElementsArray = [];
        const { classes, theme } = this.props;

        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key],
            })
        }

        const form = formElementsArray.map(formElement => (
            <TextField
                key={formElement.id}
                id={'outlined-'+formElement.config.elementConfig.type+'-input'}
                label={formElement.config.elementLabel}
                className=''
                type={formElement.config.elementConfig.type}
                name={formElement.config.elementConfig.type}
                margin="normal"
                variant="outlined"
                onChange={() => this.handleChange(formElement.config.elementConfig.type)}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                      {formElement.config.elementConfig.type === 'email' ? <AccountCircle /> : <Lock />}
                      </InputAdornment>
                    ),
                  }}
            />
        ));


        return (
            <div>
                <Tabs
                    value={this.state.tabIndex}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                >
                    <Tab label="Se connecter" />
                    <Tab label="S'inscrire" />
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.tabIndex}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <form> 
                            {form}
                        </form>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>Item Two</TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

Auth.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Auth);