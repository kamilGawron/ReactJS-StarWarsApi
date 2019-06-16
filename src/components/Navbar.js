import React , {Component} from "react"
import {Link} from "react-router-dom"
import logo from  "../img/logo.png"
import menuIcon from  "../img/menu.png"
import Header from './Header'

class Navbar extends Component{
    constructor(){
        super();
        this.state={}
    }
    menuItemClickHandler =() =>{
        let items = document.getElementById("menu-items");
        items.style.display= items.style.display=="flex"? "none":""
    }
    phoneMenuHandler=()=>{
       let items = document.getElementById("menu-items");
        items.style.display= items.style.display=="flex"? "none":"flex";
    }
    render(){
        return(
            <Header
                logo = {logo}
                phoneMenuHandler = {this.phoneMenuHandler}
                menuItemClickHandler = {this.menuItemClickHandler}
                menuIcon = {menuIcon}                
            />
            
        )
    }
}

export default Navbar