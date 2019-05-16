import React , {Component} from "react"
import {Link} from "react-router-dom"
import Loader from "./Loader"



class Peoples extends Component{
    constructor(){
        super();
        this.state={
            peoples:[],
            page:1,
            maxPage:0,
            charAmount:0,
            searchName:"",
            toShow:10,
        }
    }
    handleScroll=(e)=>{
        let header = document.getElementById("header");
        header.style.backgroundColor = window.scrollY>50? "rgba(0,0,0,1)":"rgba(0,0,0,.7)"
        
    }
    showMoreHandler=()=>{
        this.setState(prevState=>{
            return {toShow:prevState.toShow+10}
        })
    }
    inputChangeHandler=(e)=>{
        console.log(e.target.value)
        this.setState({searchName:e.target.value})
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        var self = this;
        fetch(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/people?page=${this.state.page}`)
        .then(response=>response.json())
        .then(function(data){
            let maxPage = Math.ceil(data.count/10);
            self.setState({
                charAmount:data.count,
                maxPage:maxPage,
            })
        })
        .then(()=>{
            let tmpPeoples=[];
            for(let i=1;i<=this.state.maxPage;i++){
                fetch(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/people?page=${i}`)
                .then(response=>response.json())
                .then(data=>data.results)
                .then(data=>{
                    tmpPeoples =[...tmpPeoples,...data]
                    return tmpPeoples
                })
                .then(data=>{
                    let tmp = data.map(function(elem){
                        elem.id = self.returnDiff(elem.url);
                        return elem;
                    })
                    return tmp;
                })
                .then(data=>this.setState({peoples:data}))
            }
        })
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    returnDiff(string){
        let result="";
        let compare = "https://swapi.co/api/people/";
        if (string&&compare){
            for (let x in string){
                if(string[x]!=compare[x]){
                    result+=string[x];
                }
            }
        }
       
        return result;
    }
    render(){
        var self = this;
        if(this.state.peoples[10]){
            let pl = this.state.peoples.filter(elem=>{
                return elem.name.toLowerCase().includes(this.state.searchName.toLowerCase())
            });
            let peoplesList = pl.map(function(elem,index){
               
                    return(
                        <h4 key={index}>
                            <Link to={{
                                    pathname:`characters/${elem.id}`
                                       
                                }}>
                                {elem.name}
                            </Link>
                        </h4>
                    )
               


            })
        
            return(
                <div  className="peoples">
                   <input 
                       value={this.state.searchName} 
                       onChange={this.inputChangeHandler} 
                       type="text" 
                       placeholder="find your favourite character"
                   />
                    <div className="peoples-list">
                        {peoplesList.slice(0,this.state.toShow)}
                    </div>
                    {pl.length>this.state.toShow?
                        <div onClick={this.showMoreHandler} className="showMore">
                        <div onClick={this.showMoreHandler}>Show More</div>
                    </div> : ""}
                </div>
                
            )
        }else{
            return(
               <Loader/>
            )
        }
        
    }
}

export default Peoples