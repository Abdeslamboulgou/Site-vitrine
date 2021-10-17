import React from 'react';
import Navigation from '../components/Navigation';
import SocialMedia from '../components/SocialMedia';
import Description from '../components/Description';
import ButtonsScroll from '../components/ButtonsScroll';
import Mouse from '../components/Mouse';
import { motion } from 'framer-motion';
const Home = () => {

    const variabls ={
        initial :{
            opacity:0,
            transition:{duration:0.5},
            x:100,
        },
        visible: {
            opacity: 1,
            x:0,
        },
        exit:{
            opacity:0,
            transition:{duration:0.3},
            x:-100
        }
    }
    return (
        
            <motion.div 
            className='home'
            initial="initial"
            animate="visible"
            exit="exit"
            variants={variabls}>
                <Mouse/>
            <Navigation/>
            <SocialMedia/>
            <div className='home-main'>
                <div className='maib-content'>
                       <Description/>
                </div>
            </div>
            <ButtonsScroll right={"/projet1"}/>
            </motion.div>
        

    );
};

export default Home;