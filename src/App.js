
/*https://cors-anywhere.herokuapp.com/*/

import React, {Component} from 'react';
import './App.css';
import Peoples from "./Peoples"
import PeopleDetails from "./PeopleDetails"
import Navbar from "./Navbar"
import Home from "./Home"
import Starships from "./Starships"
import Planets from "./Planets"

import {BrowserRouter,Route,Switch} from "react-router-dom"

class App extends Component {
    constructor(){
        super();
        this.state={
            
        }
    }
    
    render(){
        return (
            <div className="App">
                <BrowserRouter>
                    <Navbar />
                    <div className="padding"></div>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/ReactJS-StarWarsApi" component={Home}/>
                    <Route exact path="/planets" component={Planets}/>
                    <Route exact path="/starships" component={Starships}/>
                    <Route exact path="/characters" component={Peoples}/>
                    <Route path="/characters/:id" component={PeopleDetails}/>
                    
                </BrowserRouter>
            </div>
        );
    }
  
}

export default App;
