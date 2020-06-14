import React, {useState} from "react";

function FilterTag(props){

    const [isHover,setIsHover] = useState(false);

    function handleHover(){
        setIsHover(prev => !prev);
    }

    return(
        <div className="FilterTag">
            <div className="filter-text">
                {props.filter}
            </div>
            <div className="filter-cancel" onMouseOver={handleHover} onMouseOut={handleHover} onClick={() =>props.deleteFilter(props.id)}
            style={isHover ? {backgroundColor:"hsl(180, 14%, 20%)",cursor:"pointer"}:undefined}>
                 X
            </div>
            
        </div>
    );
}

export default FilterTag;