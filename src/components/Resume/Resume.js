import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import Education from './Education';
import Experience from './Experience';

import './index.css';
import image from '../../images/profile_img.jpeg';
import Skills from "./Skills";

class Resume extends Component {

    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>

                        <div style={{textAlign: "center"}}>
                            <img
                                src={image} alt="my_avatar" className="avatar"/>
                        </div>

                        <h2 style={{paddingTop: "24px", color: "#833FB2"}}>Joseph Ibeawuchi</h2>

                        <p style={{ fontSize: "20px"}}>Software Developer</p>
                        <hr style={{borderTop: "5px solid #833FB2", width: "75%"}}/>

                        <p>Lorem Ipsum dolor sit amet consectetur...Lorem Ipsum dolor sit amet consectetur...
                            Lorem Ipsum dolor sit amet consectetur...Lorem Ipsum dolor sit amet consectetur...
                            Lorem Ipsum dolor sit amet consectetur...Lorem Ipsum dolor sit amet consectetur...
                            Lorem Ipsum dolor sit amet consectetur...Lorem Ipsum dolor sit amet consectetur...</p>

                        <h5>Address</h5>
                        <p>Somewhere on earth</p>
                        <h5>Phone</h5>
                        <p>+91 7326996784</p>
                        <h5>Email</h5>
                        <p>joseph.ibeawuchi@gmail.com</p>
                        <h5>Website</h5>
                        <p>www.checkbacklater.mro</p>

                        <hr style={{borderTop: "5px solid #833FB2", width: "50%"}}/>

                    </Cell>

                    <Cell col={8} className="resume-right-col">
                        <h4 style={{paddingLeft: "17px"}}> <u> <b>Education: </b> </u> </h4>

                        <Education
                            startYear={2008}
                            endYear={2012}
                            schoolName="Britarch Secondary Schools, Umuahia, Abia State, Nigeria"
                            degree="High School Diploma, WAEC/NECO Board Exams"
                        />

                        <Education
                            startYear={2012}
                            endYear={2017}
                            schoolName="KIIT University, Bhubaneswar, Odisha, India"
                            degree="B.Tech/M.Tech, Computer Science & Engineering"
                        />
                        <hr style={{borderTop: "5px solid #e22947", width: "75%"}}/>

                        <h4 style={{paddingLeft: "17px"}}> <u> <b>Experience: </b> </u> </h4>

                        <Experience
                            startMonth="July"
                            startYear={2017}
                            endMonth="December"
                            endYear={2017}
                            isPresent={false}
                            companyName="TingTing"
                            address="Hyderabad"
                            jobDesc="Android Developer Intern with Full Responsibilities, spanning UI development and functionality"
                        />

                        <Experience
                            startMonth="July"
                            startYear={2018}
                            // endMonth=""
                            // endYear={}
                            isPresent={true}
                            companyName="SportEco"
                            address="Bangalore"
                            jobDesc="Freelance Android Developer for Sports startup targeting basketball coaches, with future scope on players and academies"
                        />
                        <hr style={{borderTop: "5px solid #e22947", width: "75%"}}/>

                        <h4 style={{paddingLeft: "17px"}}> <u> <b>Skills: </b> </u> </h4>
                        <Skills skill="Android" value={80}/>
                        <Skills skill="Java" value={20}/>
                        <Skills skill="Nodejs" value={50}/>
                        <Skills skill="JavaScript" value={4}/>

                    </Cell>
                </Grid>
            </div>
        );
    }

}

export default Resume;