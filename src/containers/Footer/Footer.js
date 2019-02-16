import React, { Component } from 'react';

class Footer extends Component {
    constructor() {
        super();
        this.currentYear = function() {
            return new Date().getFullYear();
        }
    }

    render() {
      return (
          <footer>
            <p>© {this.currentYear()} - Tous droits réservés</p>
          </footer>
      );
    }
}


  export default Footer;