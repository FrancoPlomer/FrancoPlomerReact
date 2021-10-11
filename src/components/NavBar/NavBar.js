import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { CardWidget } from '../../UX/CardWidget';
import { Link } from 'react-router-dom';
import imgLogo from "../../Assets/Multimedia/logoNavbar.png";
// import "firebase/compat/auth"
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import SimpleModal from '../../UX/Modal';


export default function MenuAppBar() {
    // const auth = getAuth();
    return (
    <div>
        <AppBar position="fixed">
        <Toolbar className="containerNavBar">
            <Link to="/" id="icon">
                <img src={imgLogo} alt="logoNavBar" id="logoNavBar"/>
            </Link>
            <Link to="/" id="icon">
                <div className="ContainerNavBar">
                    <h1 id="tittleNavbar">Blanco ahorro</h1>
                </div>
            </Link>
            <div className="MenuBarLogged">
                <SimpleModal />
                <div className="containerNavBar_LogAndCart">
                    <CardWidget />
                </div>
            </div>
        </Toolbar>
        </AppBar>
    </div>
    );
}