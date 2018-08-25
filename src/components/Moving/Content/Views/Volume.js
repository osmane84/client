import React from 'react';
import './Volume.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Salon from './volume/Salon';

const Volume = props => (
    <Router>
        <Route path="/demenagement/Volume" component={Elements} />
    </Router>
);

const Elements = ({ match }) => (
<div className="volume">
     <div className="row volume-nav justify-content-center" >
        <ul> 
            <li>
                <NavLink to={`${match.url}/Salon`}  activeClassName="actived">salon</NavLink>
            </li>
            <li>
                <NavLink to={`${match.url}/Cuisine`} activeClassName="actived">cuisine</NavLink>
            </li>
            <li>
                <NavLink to={`${match.url}/Chambre`} activeClassName="actived">chambre</NavLink>
            </li>
            <li>
                <NavLink to={`${match.url}/Enfant`} activeClassName="actived">Enfant</NavLink>
            </li>
            <li>
                <NavLink to={`${match.url}/SDB`} activeClassName="actived">SDB</NavLink>
            </li>
            <li>
                <NavLink to={`${match.url}/Bureau`} activeClassName="actived">Bureau</NavLink>
            </li>
            <li>
                <NavLink to={`${match.url}/Divers`} activeClassName="actived">divers</NavLink>
            </li>
        </ul>
    </div>
    <div className="volume-elements">
        <Route path={`${match.url}/:topicId`} component={Element} />
        <Route exact path={match.url} render={() => <div>index</div> } />
    </div>
</div>
);


const Element = ({ match }) => {
    if (match.params.topicId === 'Salon') {
        return <Salon/>
    }
    if (match.params.topicId === 'Cuisine') {
        return <div>cuisine</div>
    }
    if (match.params.topicId === 'Chambre') {
        return <div>chambre</div>
    }
    if (match.params.topicId === 'Enfant') {
        return <div>enfant</div>
    }
    if (match.params.topicId === 'SDB') {
        return <div>SDB</div>
    }
    if (match.params.topicId === 'Bureau') {
        return <div>Bureau</div>
    }
    if (match.params.topicId === 'Divers') {
        return <div>divers</div>
    }
}


export default Volume;