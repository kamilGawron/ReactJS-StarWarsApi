import React , {Component} from "react"
import {Link} from "react-router-dom"

class Home extends Component{
    constructor(){
        super();
        this.state={
            
        }
    }
    
   
    render(){
        
        return(
            <div className="home">
               <h2>Find informations about Your favourites Characters, Planets and Starships!</h2>
                <div className="stormtroopers"></div>
            </div>
        )
        
    }
}

export default Home