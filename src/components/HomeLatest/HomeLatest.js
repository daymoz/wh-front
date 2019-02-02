import React, { Component } from 'react';
import './HomeLatest.scss';

import img1 from './img_1.png';
import img2 from './img_2.png';
import img3 from './img_3.png';

class HomeLatest extends Component {
    render() {
        return (
            <div className="home-latest">
                <div className="latest-news box">
                    <h2>Dernière actualité</h2>
                    <div className="infos">
                        <div className="image">
                            <img src={img1} alt="" />
                        </div>
                        <div className="">
                        </div>
                    </div>
                </div>
                <div className="latest-article box">
                    <h2>Dernier article</h2>
                    <div className="infos">
                        <div className="image">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="latest-guide box">
                    <h2>Dernier guide</h2>
                    <div className="infos">
                        <div className="image">
                            <img src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default HomeLatest;