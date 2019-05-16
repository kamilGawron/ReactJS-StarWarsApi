import React, {Component} from "react"
import Loader from "./Loader"

class PeopleDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            id:props.match.params.id,
            details:{},
            films:[],
            vehicles:[],
            starships:[],
            homeworld:{},
            loadDetails:false,
            loadFilms:false,
            loadVehicles:false,
            loadStarships:false
        }

    }
    componentWillMount(){
        fetch(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/people/${this.state.id}`)
        .then(response=>response.json())
        .then(data=>this.setState({details:data,loadDetails:true}))
        .then(()=>this.fetchRestOfData())
       
        
        
        
        
    }
    fetchRestOfData=()=>{
        let self = this;
        let vehicles=[],starships=[],homeworld="";
        if(this.state.details.films[0]){
            var promise = new Promise(function(resolve,reject){
                let films=[];
                for(let i=0;i<self.state.details.films.length;i++){
                    fetch(`https://cors-anywhere.herokuapp.com/${self.state.details.films[i]}`)
                        .then(response=>response.json())
                        .then(data=>films=[...films,data.title])
                        .then(()=>{
                            if(films.length==self.state.details.films.length){
                                resolve(films);
                            }
                        })

                }
                
               
            })
           
            
            promise.then((data)=>this.setState({films:data,loadFilms:true}))
            
        }
    }
    render(){

        if(this.state.loadDetails&&this.state.loadFilms){
           return(
               <div className="character">
                   <h2>{this.state.details.name}</h2>
                   
                   <div className="content">
                       <div className="left">
                           <div className="prop">
                               <div className="title">Gender:</div>
                               <div className="desc">{this.state.details.gender}</div>
                           </div>
                           <div className="prop">
                               <div className="title">Birth year:</div>
                               <div className="desc">{this.state.details.birth_year}</div>
                           </div>
                           <div className="prop">
                               <div className="title">Hair color:</div>
                               <div className="desc">{this.state.details.hair_color}</div>
                           </div>
                           <div className="prop">
                               <div className="title">Mass:</div>
                               <div className="desc">{this.state.details.mass}</div>
                           </div>
                           <div className="prop">
                               <div className="title">Height:</div>
                               <div className="desc">{this.state.details.height}</div>
                           </div>
                           <div className="prop">
                               <div className="title">Eye color:</div>
                               <div className="desc">{this.state.details.eye_color}</div>
                           </div>
                           <div className="prop">
                               <div className="title">Skin color:</div>
                               <div className="desc">{this.state.details.skin_color}</div>
                           </div>
                           
                       </div>
                       <div className="right">
                           <div className="prop films">
                               <div className="title">Related films:</div>
                               <div className="desc">{this.state.films.map(function(elem,index){
                                       return <div key={index}>{elem}</div>
                                   })}</div>
                           </div>
                           {/*cond*/}
                            { false? 
                               <React.Fragment>
                                   <div className="prop">
                                       <div className="title">Related starships: </div>
                                       <div className="desc"></div>
                                   </div>
                                   <div className="prop">
                                       <div className="title">Homeworld:</div>
                                       <div className="desc"></div>
                                   </div>
                                   <div className="prop">
                                       <div className="title">Vehicles:</div>
                                       <div className="desc"></div>
                                   </div>
                               </React.Fragment> : "" }
                           
                           
                       </div>
                   </div>
                   <div className="preparation">This page is still under preparation.</div>
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