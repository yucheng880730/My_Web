import React from 'react';
import ReactDom from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import { Header, Button, Image } from 'semantic-ui-react';
import Pic from './img/head.jpg'
import './index.css';

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

const HeaderImage = () => <Image src={Pic} alt="" size='medium' circular />

ReactDom.render(<Home />, document.getElementById('root'));