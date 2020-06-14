import React, { useState } from "react";
import FilterTag from "./FilterTag";

function MySearchBar(props){

    const[isHover,setIsHover] = useState(false);

    function show(filter,index){
        return <FilterTag filter={filter} key={index} id={index} deleteFilter={props.deleteFilter}/>;
    }
    
    function handleHover(){
        setIsHover(prev => !prev);
    }

    return(
        <div className="search-bar-div">
        <div className="MySearchBar">
            <div className="filters">
                {props.filters.map(show)}
            </div>
            <div className="clear" onMouseOver={handleHover} onMouseOut={handleHover} onClick={props.clearFilter}
             style={isHover ? {textDecoration:"underline",cursor:"pointer"} : undefined}>
                Clear
            </div>
        </div>
        </div>
    );
}

export default MySearchBar;