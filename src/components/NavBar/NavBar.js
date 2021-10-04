import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { CardWidget } from './CardWidget';
import { Link } from 'react-router-dom';
import imgLogo from "../../Assets/Multimedia/logoNavbar.png";


export default function MenuAppBar() {
    return (
    <div>
        <AppBar position="fixed">
        <Toolbar className="containerNavBar">
            <Link to="/" id="icon">
                <img src={imgLogo} alt="logoNavBar" id="logoNavBar"/>
            </Link>
            <Link to="/" id="icon">
                <div>
                    <h1 id="tittleNavbar">Blanco ahorro</h1>
                </div>
            </Link>
            <div className="containerNavBar_LogAndCart">
                <CardWidget />
            </div>
        </Toolbar>
        </AppBar>
    </div>
    );
}