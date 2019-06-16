import React from 'react'

export default function PeoplesList(props){
    const {searchName,inputChangeHandler,peoplesList,toShow,showMoreHandler} = props;
    return(
        <div className="peoples">
            <input 
                value={searchName} 
                onChange={inputChangeHandler} 
                type="text" 
                placeholder="find your favourite character"
                />
            <div className="peoples-list">
                {peoplesList.slice(0,toShow)}
            </div>
            {peoplesList.length>toShow?
                <div onClick={showMoreHandler} className="showMore">
                    <div onClick={showMoreHandler}>Show More</div>
                </div> : ""}
        </div>
    )
}
