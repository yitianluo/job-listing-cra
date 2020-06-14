import React, { useState } from "react";
import New from "./New";
import Feature from "./Feature";

function JobInfo(props){

    const [isHover,setIsHover] = useState(false);

    function handleHover(){
        setIsHover(prev => !prev);
    }


    return(
        <div className="JobInfo">
            <div className="job-info-top">
                <div className="job-company">{props.company}</div>
                {props.isNew && <New />}
                {props.featured && <Feature />}
            </div>

            <div className="job-title" onMouseOver={handleHover} onMouseOut={handleHover} style={isHover ? {color:"hsl(180, 29%, 50%)",cursor:"pointer"}:undefined}>
                <p>{props.position}</p>
            </div>

            <div className="job-detail">
                <p>{props.postedAt + " · "}{props.contract + " · "}{props.location}</p>
            </div>
            <div>
                <hr></hr>
            </div>
        </div>
    );
}

export default JobInfo;