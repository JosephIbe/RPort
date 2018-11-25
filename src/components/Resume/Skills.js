import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

export default class Skills extends Component {

    constructor(props){
        super(props);

        this.state = {
            ...props
        }
    }

    render() {

        const { skill, value } = this.state;

        return (
            <div>
                <Grid>
                    <Cell col={12}>
                        <div style={{display: "flex"}}>
                            <p>
                                {skill} <ProgressBar progress={value} style={{margin: "auto"}}/>
                            </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }

}