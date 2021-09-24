import React from 'react';
import ReactDom from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import { Header, Button, Image } from 'semantic-ui-react';
import Pic from './img/head.jpg'
import './index.css';
import SpecificResume from './components/Resume'
import {resumes} from './components/resumes';

import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const HeaderImage = () => <Image src={Pic} alt="" size='medium' circular />

function Home() {
    return (
        <div>
            <Header as='h1'>Hello</Header>
            <HeaderImage />
            <HomeButton />
        </div>
    )
}

const HomeButton = () => {
    return(
        <div>
            <Button primary>RESUME</Button>
            <Button secondary>PROJECTS</Button>
        </div>
    )
}

function ResumeList() {
  return (
    <section className='booklist'>
      {resumes.map((resume) => {
        return <SpecificResume key={resume.id} {...resume}></SpecificResume>;
      })}
    </section>
  );
}

ReactDom.render(
  <Router>
    <div>
        <Home />
        <ResumeList />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About /> 
          </Route>
        </Switch>
    </div>
  </Router>
  , document.getElementById('root')
);