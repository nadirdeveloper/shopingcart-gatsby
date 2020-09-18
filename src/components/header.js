import React ,{Fragment}from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CustomLink from './CustomLink';
import logo from '../logos/logo.png';
import '../styles/nav.module.css';
export default function Header() {
    return (
        <AppBar>
             
        <Toolbar className="nav-container">
        <div className="img-cont">
                <img src={logo} alt="logo"/>
                </div>
            <Fragment>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/trending-products">Trnding Products</CustomLink>
            <CustomLink to="/about">About US</CustomLink>
            <CustomLink to="/contactus">Contact US</CustomLink>
            </Fragment>
        </Toolbar>
      </AppBar>
    )
}
