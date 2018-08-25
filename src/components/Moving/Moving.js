import React, { Component } from 'react';
import ToolBar from './ToolBar/ToolBar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import Volume from "./Content/Views/Volume";
import Devis from "./Content/Views/Devis";
import Index from "./Content/Views/Index";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Moving.css';


class Moving extends Component{
    state = {
        SideDrawerOpen : false
    }

    DrawerToggleClickHandler = () => {
        this.setState(
            (prevState) => {
                return { SideDrawerOpen : !prevState.SideDrawerOpen }
            }
        );
    }

    BackdropClickHandler = () => {
        this.setState({
            SideDrawerOpen : false
        });
    }

    ItemsClickHandler = () => {
        this.setState({
            SideDrawerOpen : false
        });
    }

   

    
    render(){
        let backdrop;

        const Content = props => (
            <Router>
                <Route path="/demenagement" component={Actions} />
            </Router>
        );

        const Actions = ({ match }) => (
        <div className="moving-content ">
             <div className="moving-content-aside" >
                <ul> 
                    <li>
                    <Link to={`${match.url}/Devis`}>Demandez plusieurs Devis</Link>
                    </li>
                    <li>
                    <Link to={`${match.url}/Volume`}>Calculez votre Volume</Link>
                    </li>
                </ul>
            </div>
        <div className="moving-content-content container">
            <Route path={`${match.url}/:topicId`} component={Action} />
            <Route exact path={match.url} render={Index} />
        </div>
        </div>
        );


        const Action = ({ match }) => {
        if (match.params.topicId === 'Devis') {
            return <Devis />
            }else {
            return <Volume />
        }
        }

        if(this.state.SideDrawerOpen){
            backdrop = <Backdrop click={ this.BackdropClickHandler }/>
        }
        return( 
            <div className="moving">
                <ToolBar DrawerClickHandler={ this.DrawerToggleClickHandler }/>
                <SideDrawer  ItemsClick={ this.ItemsClickHandler } show={ this.state.SideDrawerOpen }/>
                {backdrop}
                <div className="content">
                    <Content/>
                </div>
            </div> 
        )
    }
}



export default Moving;