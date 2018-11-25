import React, {Component} from 'react';
import './App.css';

import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Routes from './components/Routes';
import { Link } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div className="App">
                {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
                <div className="demo-big-content">
                    <Layout>
                        <Header title={<Link to="/" style={{textDecoration: "none"}}>My Portfolio</Link>} scroll className='header-bkg'>
                            <Navigation>
                                <Link to="/resume">Resume</Link>
                                <Link to="/projects">Projects</Link>
                                <Link to="/about">About Me</Link>
                                <Link to="/contact">Contact</Link>
                            </Navigation>
                        </Header>
                        <Drawer title="My Portfolio">
                            <Navigation>
                                <Link to="/resume">Resume</Link>
                                <Link to="/projects">Projects</Link>
                                <Link to="/about">About Me</Link>
                                <Link to="/contact">Contact</Link>
                            </Navigation>
                        </Drawer>
                        <Content>
                            <div className="page-content"/>
                            <Routes/>
                        </Content>
                    </Layout>
                </div>
            </div>
        );
    }
}

export default App;