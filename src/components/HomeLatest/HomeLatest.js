import React, { Component } from 'react';
import './HomeLatest.scss';

import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.jpg';

class HomeLatest extends Component {
    render() {
        return (
            <div className="home-latest">
                <h2>Latest</h2>
                <div className="contents">
                    <div className="content-floating">
                        <div className="latest-news box">
                            <div className="box-image">
                                <img src={img1} alt="1" />
                            </div>
                            <div className="infos">
                                <h3 className="info-title">Lorem salut maggle</h3>
                                <div className="chapo">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                            </div>
                        </div>
                        <div className="latest-article box">
                            <div className="box-image">
                                <img src={img2} alt="2" />
                            </div>
                            <div className="infos">
                                <h3 className="info-title">Lorem bidou bidou choubidou</h3>
                                <div className="chapo">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                            </div>
                        </div>
                        <div className="latest-guide box">
                            <div className="box-image">
                                <img src={img3} alt="3" />
                            </div>
                            <div className="infos">
                                <h3 className="info-title">Lorem ipséité - Nouvel album</h3>
                                <div className="chapo">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default HomeLatest;