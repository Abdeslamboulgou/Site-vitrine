import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';

const Histoire = (props) => {
    const [currentHistoire] = useState(projectsData)
    const projet=currentHistoire[props.numeroProjet]
    let left=Math.floor(Math.random() + 200 + 750)+"px"
    let top=Math.floor(Math.random() + 200 + 150)+"px"
    let transform="scale("+(Math.random() + 0.7) + ")"

    
    return (
        <div className='histoire-main'>
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
        </div>
    );
};

export default Histoire;