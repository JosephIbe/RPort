import React, {Component} from 'react';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';

import { faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './index.css';
import image from '../../images/profile_img.jpeg';

class Contact extends Component {

    render() {
        return (
            <div className="contacts-body">
                <Grid className="contacts-grid">

                    <Cell col={6}>

                        <h3>Joseph Ibeawuchi</h3>

                        <img src={image}
                             style={{
                                 width: "276px", height: "255px",
                                 borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px',
                                 borderTopLeftRadius: '10px', borderTopRightRadius: '10px'
                             }}
                             alt="my avatar"/>

                        <p
                            style={{width: '75%', paddingTop: '12px', margin: 'auto'}}
                        >
                            Joseph Ibeawuchi lorem ipsum sit amet doloctetur, return, switch , constructor, bus driver,
                            ego killer,
                            lorem ipsum sit amet doloctetur, return, switch , constructor, bus driver, ego killer,
                            lorem ipsum sit amet doloctetur, return, switch , constructor, bus driver, ego killer,
                        </p>

                    </Cell>

                    <Cell col={6}>

                        <h3>Contact Me</h3>
                        <hr/>

                        <div className="contact-info-list">
                            <List>
                                <ListItem className="center-item">
                                    <ListItemContent icon={<FontAwesomeIcon icon={faPhoneSquare}/>}
                                                     style={{fontSize: '16px', fontFamily: 'Anton'}}>
                                        (+91) 7326996784
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent icon={<FontAwesomeIcon icon={faEnvelopeSquare}/>}
                                                     style={{fontSize: '16px', fontFamily: 'Anton'}}>
                                        joseph.ibeawuchi@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent icon={<FontAwesomeIcon icon={faSkype}/>}
                                                     style={{fontSize: '16px', fontFamily: 'Anton'}}>
                                        Skype: joseph.joey22
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        );
    }

}

export default Contact;