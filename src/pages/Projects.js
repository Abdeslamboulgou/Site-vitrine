import React from 'react';
import ButtonsScroll from '../components/ButtonsScroll';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Histoire from '../components/Histoire';
import Mouse from '../components/Mouse';
export const Project1 = () => {
    return (
        <main>
            <Mouse/>
        <div className='project'>
            <Navigation/>
            <Logo/>
            <Histoire   numeroProjet={0}/>
            <ButtonsScroll  left={'/'} right={'/projet2'} />
        </div>
        </main>
    );
};
export const Project2 = () => {
    return (
        <main>
            <Mouse/>
        <div className='project'>
            <Navigation />
            <Logo/>
            <Histoire   numeroProjet={1}/>
             <ButtonsScroll left={'/projet1'} right={'/projet3'}/>
        </div>
        </main>
        
    );
};
export const Project3 = () => {
    return (
        <main>
            <Mouse/>
        <div className='project'>
            <Navigation />
            <Logo/>
            <Histoire   numeroProjet={2}/>
            <ButtonsScroll left={'/projet2'} right={'/contact'}/>
        </div>
        </main>
    );
};
