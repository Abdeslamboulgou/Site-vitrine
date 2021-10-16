import React from 'react';
import Navigation from '../components/Navigation';
import Mouse from '../components/Mouse';
import Logo from '../components/Logo'
import SocialMedia from '../components/SocialMedia'
import CopyToClipboard from 'react-copy-to-clipboard';
import ButtonsScroll from '../components/ButtonsScroll';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
const Contact = () => {

    const variabls ={
        initial :{
            opacity:1,
            x:0,
        },
        exit:{
            opacity:0,
            x:400
        }

    }
    const transition={
        ease:[0.03,0.87,0.73,0.9],
        duration:0.6
    }
    return (
        <div>
            <Mouse/>
           <motion.div 
            className='contact'
            initial="exit"
            exit="exit"
            animate="initial"
            variants={variabls}
            transition={transition}>
            <Navigation/>
            <Logo/>
            <ContactForm/>
            <div className="contact-infos">
                 <div className="adress">
                   <div className="content">
                     <h4>adresse</h4>
                     <CopyToClipboard text="174 rue michel ange" className="hover">
                        <p style={{cursor : 'pointer'}} className="clipboard" onClick={() => {
                            alert("Adresse copie !!")
                        }}>174 rue Michel Ange <br/>62100 Calais </p>
                    </CopyToClipboard>
                   </div>
                 </div>
            
            <div className="phone">
                <div className="content">
                    <h4>Téléphone </h4>
                    <CopyToClipboard text="07 49 64 58 09" className="hover">
                        <p style={{cursor : 'pointer'}} className="clipboard" onClick={() => {
                            alert("Télephone copie !!")
                        }}>07 49 64 58 09</p>
                    </CopyToClipboard>
                </div>
            </div>
            <div className="email">
                <div className="content ">
                    <h4>Email</h4>
                    <CopyToClipboard text="boulgouslam@gmail.com" className="hover">
                        <p style={{cursor : 'pointer'}} className="clipboard" onClick={() => {
                            alert("Email copie !!")
                        }}>boulgouslam@gmail.com</p>
                    </CopyToClipboard>
                </div>
            </div>
            <SocialMedia/>
            <div className="credits">
                <p>AbdeslamBoulgou - 2021</p>
            </div>
            </div>
            
           </motion.div> 
           <ButtonsScroll left="/projet3"/>
           
        </div>
    );
};

export default Contact;