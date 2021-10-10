import React from 'react';
import Navigation from '../components/Navigation';
import SocialMedia from '../components/SocialMedia';
import Description from '../components/Description';
import ButtonsScroll from '../components/ButtonsScroll';
import Mouse from '../components/Mouse';
const Home = () => {
    return (
        <div>
            <div className='home'>
                <Mouse/>
            <Navigation/>
            <SocialMedia/>
            <div className='home-main'>
                <div className='maib-content'>
                       <h1>Boumalne Dades</h1>
                       <Description/>
                </div>
            </div>
            <ButtonsScroll right={"/projet1"}/>
            </div>
        </div>

    );
};

export default Home;