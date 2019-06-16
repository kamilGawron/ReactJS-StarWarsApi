import React , {Component} from "react"
import {Link} from "react-router-dom"
import Loader from "./Loader"
import PeoplesList from "./PeoplesList"
import {fetchPeoples} from '../services/fetchData'
import getPeoplesList from '../services/getPeoplesList'

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
        this.setState({searchName:e.target.value})
    }
    componentDidMount(){
        fetchPeoples().then(data=>this.setState({peoples:data}));
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
    render(){
        var self = this;
        if(this.state.peoples[10]){
            let peoplesList = getPeoplesList(this.state.peoples,this.state.searchName);        
            return(
                <PeoplesList
                    searchName={this.state.searchName}
                    inputChangeHandler = {this.state.inputChangeHandler}
                    peoplesList={peoplesList}
                    toShow = {this.state.toShow}
                    showMoreHandler={this.showMoreHandler}
                />
            )
        }else{
            return(
               <Loader/>
            )
        }
    }
}

export default Peoples