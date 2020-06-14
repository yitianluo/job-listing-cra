import React from "react";
import JobInfo from "./JobInfo";
import JobRequirement from "./JobRequirement";
import "./App.css";

function Card(props){

    

    return(
        <div className="Card" style={props.featured ? {borderLeftColor:"hsl(180, 29%, 50%)"} : undefined}>
            <div className="card-img">
            <img src={props.logo.substring(1)} alt="logo" />
            </div>
            <div className="card-info">
            <JobInfo company={props.company} position={props.position} isNew={props.isNew} featured={props.featured} postedAt={props.postedAt} 
                contract={props.contract} location={props.location}
            />
            </div>
            <div className="card-feature">
            <JobRequirement criteria={props.criteria} 
            addFilter={props.addFilter} isClickable={props.isClickable} />
            </div>
            
        </div>
    );
}



export default Card; 
