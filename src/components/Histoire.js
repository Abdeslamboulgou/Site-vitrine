import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { motion } from 'framer-motion';

const Histoire = (props) => {
    const [currentHistoire] = useState(projectsData)
    const projet=currentHistoire[props.numeroProjet]
    let left=Math.floor(Math.random() + 200 + 750)+"px"
    let top=Math.floor(Math.random() + 200 + 150)+"px"
    let transform="scale("+(Math.random() + 0.7) + ")"

    const variabls ={
        initial :{
            opacity:0,
            transition:{duration:0.5},
            x:400,
        },
        visible: {
            opacity: 1,
            x:0,
        },
        exit:{
            opacity:0.4,
            transition:{duration:0.35},
            x:-800
        }
    }
    const transition={
        ease:[0.03,0.87,0.73,0.9],
        duration:0.6
    }

    
    return (
        <motion.div
         className='histoire-main'
         initial="initial"
         animate="visible"
         exit="exit"
         variants={variabls}
         transition={transition}>
            <div className='histoire-content'>
                   <h1>{projet.title}</h1>
                   <p>{projet.date}</p>
                   <ul className="languages">
                       {projet.languages.map((item) => {
                           return <li key={item}>{item}</li>
                       })}

                   </ul>
            </div>
            <div className="img-content">
                 <div className="img-container hover">
                      <span>
                          <h5> {projet.title}</h5>
                          <p>{projet.infos}</p>
                      </span>
                      <ul className='scrol' >
                      {projet.img.map((item) => {
                           return <li key={item}><img src={item} alt='dades'/>  </li>
                       })}
                       </ul>
                                     </div>
            </div>
            <div  className='button-container'>
                   <a href={projet.link} target='_blank' rel='noopener noreferrer' className='hover'>
                       <span className='button'>Voir le site </span>
                   </a>
            </div>
            <span className="random-circle" style={{left,top,transform}}>

            </span>
        </motion.div>
    );
};

export default Histoire;