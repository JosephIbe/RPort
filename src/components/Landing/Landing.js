import React, {Component} from 'react';
import {Cell, Grid} from 'react-mdl';

import './index.css';
import {faFacebook, faGithub, faGooglePlus, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Landing extends Component {

    render() {
        return (
            <div>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img src={require('../../images/profile_img.jpeg')}
                             alt="Profile Avatar"
                             className='profile-img'/>

                        <div className="banner-txt">
                            <h2>Full Stack Web and Android Developer</h2>
                            <hr/>

                            <p>
                                Android | Java | C | Javascript | HTML | CSS | Nodejs | Express | MongoDB
                            </p>

                            <p className='others'>
                                LibGDX | Electron
                            </p>

                            <div className="social-links">
                                <a href="https://github.com/JosephIbe"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} size="3x"
                                                     style={{color:"#000"}}
                                                     className="social-icon"/>
                                </a>

                                <a href="https://www.facebook.com" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="3x"
                                                     style={{color:"#3b5998"}}
                                                     className="social-icon"/>
                                </a>

                                <a href="https://www.linkedin.com/in/joseph-ibeawuchi-875993119/"
                                   target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} size="3x"
                                                     style={{color: "0E76A8"}}
                                                     className="social-icon"/>
                                </a>
                                <a href="https://www..com" target="_blank">
                                    <FontAwesomeIcon icon={faGooglePlus} size="3x"
                                                     style={{color:"#FF0000"}}
                                                     className="social-icon"/>
                                </a>
                            </div>

                        </div>

                    </Cell>
                </Grid>
            </div>
        );
    }

}

export default Landing;