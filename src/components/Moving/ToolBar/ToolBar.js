import React from 'react';
import './ToolBar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { connect } from 'react-redux';


const ToolBar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <DrawerToggleButton click={ props.DrawerClickHandler}/>
            <div className="toolbar-logo">
                <a href="/">LOGO</a>
            </div>
            <div className="spacer"/>
            <div className="toolbar-volume"><span className="toolbar-volume-title">Volume :</span><span className="toolbar-volume-val">{props.VolumeStored} M³</span> </div>
        </nav>
    </header>
);

const mapStoreToProps = (store) => {
    return {
        VolumeStored: store.VolumeStored
    }
}

export default connect(mapStoreToProps)(ToolBar);