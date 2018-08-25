import React from 'react';
import './SideDrawer.css';

import { NavLink } from 'react-router-dom';

const SideDrawer = props =>{
    let DrawerClasses = 'side-drawer';

    if(props.show){
        DrawerClasses = 'side-drawer open'
    }

    return (
            <nav className={DrawerClasses}>
                <ul>
                    <li onClick={ props.ItemsClick }><NavLink exact activeStyle={{color: 'red'}} to="/demenagement">Déménagement</NavLink></li>
                    <li onClick={ props.ItemsClick }><NavLink exact activeStyle={{color: 'red'}} to="/demenagement/Devis">Demandez plusieurs Devis</NavLink></li>
                    <li onClick={ props.ItemsClick }><NavLink exact activeStyle={{color: 'red'}} to="/demenagement/Volume">Calculez votre Volume</NavLink></li>
                </ul>
            </nav>
    );
}

export default SideDrawer;