import React, {Component} from "react"
import Loader from "./Loader"

class PeopleDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            id:props.match.params.id,
            details:{},
        }

    }
    componentWillMount(){
        fetch(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/people/${this.state.id}`)
        .then(response=>response.json())
        .then(data=>this.setState({details:data}))
    }
    render(){
        if(this.state.details.name){
           return(
               <div className="character">
                   <h2>{this.state.details.name}</h2>
               </div>
              )
        }
        else{
           return(
            <Loader />
          )
        }
       
    
    }
}
export default PeopleDetails