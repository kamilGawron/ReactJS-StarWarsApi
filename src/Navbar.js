import React , {Component} from "react"
import {Link} from "react-router-dom"
import logo from  "./img/logo.png"
import menuIcon from  "./img/menu.png"

class Navbar extends Component{
    constructor(){
        super();
        this.state={
            
        }
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
            <header id="header">
               <div className="logo">
                   <img src={logo} alt=""/>
               </div>
                <div id="menu-items" className="items">
                    <div onClick={this.phoneMenuHandler} className="close">X</div>
                    <div>
                        <Link onClick={this.menuItemClickHandler} to="/">Home</Link>
                    </div>
                    <div>
                        <Link onClick={this.menuItemClickHandler} to="/characters">Characters</Link>
                    </div>
                    <div>
                        <Link onClick={this.menuItemClickHandler} to="/planets">Planets</Link>
                    </div>
                    <div>
                        <Link onClick={this.menuItemClickHandler} to="/starships">Starships</Link>
                    </div>
                </div>
                <div className="menu-icon-phone">
                    <img onClick={this.phoneMenuHandler} src={menuIcon} alt=""/>
                </div>
            </header>
        )
    }
}

export default Navbar