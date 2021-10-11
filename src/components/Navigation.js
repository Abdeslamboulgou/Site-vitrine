import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                  <li><NavLink exact to="/"  activeClassName="projets" >
                   Home
                  </NavLink></li>
                  <li className='nav_projets'>  Infos Dades <ul className='nav-projets'>
                                  <li> <NavLink exact to="/projet1" activeClassName="projets" >
                                    Histoire de Boumalne Dades
                                </NavLink></li>
                                <li> <NavLink exact to="/projet2" activeClassName="projets" >
                                   Dadés vallée
                                </NavLink></li>
                                <li> <NavLink exact to="/projet3" activeClassName="projets" >
                                   Cultures et Activités
                                </NavLink></li>
                         </ul>
                   </li>
                     <li> <NavLink exact to="/contact" activeClassName="projets" >
                   Contact
                     </NavLink></li>
            </ul>
        </div>
    );
};

export default Navigation;