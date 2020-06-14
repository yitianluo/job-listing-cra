import React from "react";
import Card from "./Card";
import "./App.css";
import Data from "../data.json";




function CardDiv(props){

    function createCard(job){

        const {id,logo,company,position,new:isNew,featured,postedAt,contract,location,role,level,languages,tools}=job;
        const criteria = [role,level,...languages,...tools];
        const passFilter = props.filters.every(filter =>criteria.includes(filter));
        
        if (passFilter===true) {
        return (<Card key={id} id={id} logo={logo} company={company} position={position} isNew={isNew} featured={featured} 
        postedAt={postedAt} contract={contract} location={location} criteria={criteria} addFilter={props.addFilter} isClickable={props.isClickable} />)
            }
    }

    return(
        Data.map(createCard)
    );
}


export default CardDiv;