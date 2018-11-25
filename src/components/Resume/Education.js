import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class Education extends Component {

    constructor(props){
        super(props);

        this.state = {
            ...props
        }

    }

    render() {

        const { startYear, endYear, schoolName, degree } = this.state;

        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <h5> {startYear} - {endYear}</h5>
                    </Cell>
                    <Cell col={8}>
                        <h5> <b> School: </b> <span>{schoolName}</span></h5>
                        <h5> Major/Degree: <span>{degree}</span></h5>
                    </Cell>
                </Grid>
            </div>
        );
    }

}