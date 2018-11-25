import React, { Component } from 'react';
import { Tabs, Tab,
    Grid, Cell,
    Card, CardTitle,
    CardText, CardMenu,
    CardActions, Button, IconButton } from 'react-mdl';
import './index.css';

//todo separate the android, web and full stack tabs into diff components and use grid in components, not here

class Projects extends Component {

    constructor(props){
        super(props);

        this.state = {
            activeTab: 0
        }

    }

    toggleCategories = () => {
        switch (this.state.activeTab){
            default: return false;
            case 0:
                return <div className="projects-grid">

                    <Card shadow={3} style={{ width: '350px', margin: 'auto'}}>
                        <CardTitle
                            style={{color: '#fff',
                                background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover',
                                height: '175px'}}>
                            Welcome</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipscing elit</CardText>
                        <CardActions border>
                            <Button colored>Source Code</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: "#FFF"}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={3} style={{ width: '350px', margin: 'auto'}}>
                        <CardTitle
                            style={{color: '#fff',
                                background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover',
                                height: '175px'}}>
                            Welcome</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipscing elit</CardText>
                        <CardActions border>
                            <Button colored>Source Code</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: "#FFF"}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={3} style={{ width: '350px', margin: 'auto'}}>
                        <CardTitle
                            style={{color: '#fff',
                                background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover',
                                height: '175px'}}>
                            Welcome</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipscing elit</CardText>
                        <CardActions border>
                            <Button colored>Source Code</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: "#FFF"}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={3} style={{ width: '350px', margin: 'auto'}}>
                        <CardTitle
                            style={{color: '#fff',
                                background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover',
                                height: '175px'}}>
                            Welcome</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipscing elit</CardText>
                        <CardActions border>
                            <Button colored>Source Code</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: "#FFF"}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                </div>
            case 1:
                return <h1>Web Projects Here</h1>;
            case 2:
                return <h1>Full Stack Projects Here</h1>;
        }
    };

    render() {
        return (
            <div className="">
                <Tabs
                    className="project-categories"
                    activeTab={this.state.activeTab}
                    onChange={ (tabId) => this.setState({activeTab: tabId})}>
                    <Tab>Android</Tab>
                    <Tab>Web</Tab>
                    <Tab>Full Stack</Tab>
                </Tabs>

                <section className="project-grid">
                    <Grid>
                        <Cell col={12} >
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>

            </div>
        );
    }

}

export default Projects;