import React, { useState } from "react";

function Requirement(props){

    

    const[isHover,setIsHover] = useState(false);
    
    function handleHover(){
        setIsHover(prev =>!prev);
    }


    return (
        <div className="Requirement" 
            name={props.content} 
            onMouseOver={handleHover} 
            onMouseOut={handleHover}
            onClick={props.isClickable ? ()=>props.addFilter(props.content) : undefined }
            style={isHover ? {color:"white",backgroundColor:"hsl(180, 29%, 50%)",cursor:"pointer"} : undefined}
        >
            {props.content}
        </div>
    );
}

export default Requirement;