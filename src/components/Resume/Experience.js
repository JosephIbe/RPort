import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class Experience extends Component {

    constructor(props){
        super(props);

        this.state = {
            ...props
        }

    }

    // const If = (this.state) => {
    //     const isPresent = this.state.isPresent || false;
    //     const Positive = this.state.isPresent || null;
    //     const Negative = this.state.isPresent || null;
    //
    //     return isPresent ? Positive : Negative;
    // };

    render() {

        const {
            startMonth, startYear,
            endMonth, endYear, isPresent,
            companyName, address, jobDesc } = this.state;

        return (
            <div>
                <Grid>
                    <Cell col={4}>

                        {/*<h5> {startMonth}, {startYear} - {isPresent && <span>{endMonth}, {endYear}*/}
                            {/*</span>}</h5>*/}
                        <h5> {startMonth}, {startYear} - {endMonth}, {endYear}</h5>
                    </Cell>
                    <Cell col={8}>
                        <h5> <b> Company/Organization: </b> <span>{companyName}, {address}</span></h5>
                        <h5> <b> Position & Description: </b> <span>{jobDesc}</span></h5>
                        {/*<h5> Position: <span>{jobDesc}</span></h5>*/}
                    </Cell>
                </Grid>
            </div>
        );
    }

}