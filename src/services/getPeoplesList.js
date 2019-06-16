import React from 'react';
import {Link} from 'react-router-dom'

export default function getPeoplesList(peoplesTab,searchName){
    let pl = peoplesTab.filter(elem=>{
        return elem.name.toLowerCase().includes(searchName.toLowerCase())
    });
    let peoplesList = pl.map(function(elem,index){
        return(
            <h4 key={index}>
                <Link to={`characters/${elem.id}`}>
                    {elem.name}
                </Link>
            </h4>
        )
    })
    return peoplesList;
}