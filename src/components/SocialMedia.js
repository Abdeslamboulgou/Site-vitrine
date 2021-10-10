import React from 'react';

const SocialMedia = () => {
    const animation =() => {
        let navlinks= document.querySelectorAll('.social-media a')
        navlinks.forEach(Link => {
            Link.addEventListener('mouseover' ,() => {
                Link.style.transform=`rotate(2turn)`
            })
            Link.addEventListener('mouseleave',() =>{
                Link.style.transform=''
            })
        })
    }
    return (
        <div className='social-media' >
            <ul className='content'>
                <a href='https://www.facebook.com/La-vall%C3%A9e-du-dades-1609263115795241/' target='_blank'
                      rel='noopener noreferrer' className='hover' onMouseOver={animation}><li><i className="fab fa-facebook-f"></i></li></a>
                      
                <a href='https://twitter.com/CommunesMaroc' target='_blank'
                      rel='noopener noreferrer' className='hover' onMouseOver={animation}><li><i className="fab fa-twitter"></i></li></a>
                      
                <a href='https://www.instagram.com/explore/locations/229318611/morocco/boumalne-ouarzazate-morocco/la-vallee-des-gorges-du-dades/' target='_blank'
                      rel='noopener noreferrer' className='hover'onMouseOver={animation}><li><i className="fab fa-instagram"></i></li></a>
            </ul>
        </div>
    );
};

export default SocialMedia;