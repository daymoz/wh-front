import React, { Component } from 'react';
import LogoPNG from '../../logo.png';
import './Logo.scss';

class Logo extends Component {
    render() {
        return (
            <div className="wvh-logo">
                <img src={LogoPNG} alt="WavenHub Logo"></img>
            </div>
        );
    }
  }
  
  export default Logo;