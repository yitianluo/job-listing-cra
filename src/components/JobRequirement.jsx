import React from "react";
import Requirement from "./Requirement";


function JobRequirement(props){


    function listContent(item,index){
        return(
            <Requirement content={item} key={index} addFilter={props.addFilter} isClickable={props.isClickable} />
        );
    }

    return(
        <div className="JobRequirement">
            {props.criteria.map(listContent)}
        </div>
    )
}

export default JobRequirement; 