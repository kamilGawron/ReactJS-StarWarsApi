import React, {Component} from "react"
import Loader from "./Loader"
import {Link} from "react-router-dom"
import {fetchPeoplesDetails} from '../services/fetchData'
import returnDiff from '../services/returnDiff'


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
    prevNextHandler=(id)=>{
        this.setState({loadDetails:false,loadFilms:false,id:id},function(){
            fetchPeoplesDetails(id).then(data=>{
                this.setState({
                    details:data.data,
                    loadDetails:true,
                    loadFilms :true,
                    films:data.films
                })
            });
        })
    }
  
    componentDidMount(){
        window.onpopstate = this.onBackButtonEvent;
        fetchPeoplesDetails(this.state.id).then(data=>{
            this.setState({
                details:data.data,
                loadDetails:true,
                loadFilms :true,
                films:data.films
            })
        });

    }
    onBackButtonEvent=()=>{
        this.prevNextHandler(
            returnDiff(
                window.location.href,"http://localhost:3000/characters/"
            ));
    }
   
    componentWillUpdate(){
    }
    componentWillUnmount(){
        window.onpopstate = () => {}

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
                   <div className="buttons">
                       <Link to={`../${parseInt(this.state.id)-1}/`}>
                           <div onClick={this.prevNextHandler.bind(this,(parseInt(this.state.id)-1))} className="prev">PREV</div>
                       </Link>
                       <Link to={`../${parseInt(this.state.id)+1}/`}>
                           <div onClick={this.prevNextHandler.bind(this,(parseInt(this.state.id)+1))} className="next">NEXT</div>
                       </Link>
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