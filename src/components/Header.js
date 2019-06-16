import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(props){
    const {logo,phoneMenuHandler,menuItemClickHandler,menuIcon} = props;
    return(
        <header id="header">
            <div className="logo">
                <Link to="/"><img src={logo} alt=""/></Link>
            </div>
            <div id="menu-items" className="items">
                <div onClick={phoneMenuHandler} className="close">X</div>
                <div>
                    <Link onClick={menuItemClickHandler} to="/">Home</Link>
                </div>
                <div>
                    <Link onClick={menuItemClickHandler} to="/characters">Characters</Link>
                </div>
                <div>
                    <Link onClick={menuItemClickHandler} to="/planets">Planets</Link>
                </div>
                <div>
                    <Link onClick={menuItemClickHandler} to="/starships">Starships</Link>
                </div>
            </div>
            <div className="menu-icon-phone">
                <img onClick={phoneMenuHandler} src={menuIcon} alt=""/>
            </div>
        </header>
    )
}