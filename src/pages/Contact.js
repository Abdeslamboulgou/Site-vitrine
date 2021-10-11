import React from 'react';
import Navigation from '../components/Navigation';
import Mouse from '../components/Mouse';
import Logo from '../components/Logo'
import SocialMedia from '../components/SocialMedia'
import CopyToClipboard from 'react-copy-to-clipboard';
import ButtonsScroll from '../components/ButtonsScroll';
import ContactForm from '../components/ContactForm';
const Contact = () => {
    return (
        <div>
            <Mouse/>
           <div  className='contact'>
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
                    <CopyToClipboard text="094848493" className="hover">
                        <p style={{cursor : 'pointer'}} className="clipboard" onClick={() => {
                            alert("Télephone copie !!")
                        }}>090998987</p>
                    </CopyToClipboard>
                </div>
            </div>
            <div className="email">
                <div className="content ">
                    <h4>Email</h4>
                    <CopyToClipboard text="Asso@gmail.com" className="hover">
                        <p style={{cursor : 'pointer'}} className="clipboard" onClick={() => {
                            alert("Email copie !!")
                        }}>Asso@gmail.com</p>
                    </CopyToClipboard>
                </div>
            </div>
            <SocialMedia/>
            <div className="credits">
                <p>AbdeslamBoulgou - 2021</p>
            </div>
            </div>
            
           </div> 
           <ButtonsScroll left="/projet3"/>
           
        </div>
    );
};

export default Contact;