import React, { useState } from "react";
import CardDiv from "./CardDiv";
import MySearchBar from "./MySearchBar";

function MidContainer(){

    const [isSearch,setIsSearch] = useState(false);
    const [filters,setFilter] = useState([]);
    const [isClickable,setIsClickable] = useState(false);

    function handleSearch(){
        setIsSearch(prev => !prev);
        setFilter([]);
        setIsClickable(prev => !prev);
    }

    function addFilter(newFilter){
        setFilter(prev => prev.includes(newFilter) ? prev : [...prev,newFilter]);
    }

    function deleteFilter(id){
        setFilter((prev) =>prev.filter((item,index) => {
            return index!==id;
        }));
    }

    function clearFilter(){
        setFilter([]);
    }

    return(
        <div className="MidContainer">
            <div className="inline-div mid-left"> </div>
            <div className="inline-div mid-center">
                {isSearch && <MySearchBar filters={filters} deleteFilter={deleteFilter} clearFilter={clearFilter} />}
                <CardDiv addFilter={addFilter} filters={filters} isClickable={isClickable}/>
            </div>
            <div className="inline-div mid-right" onClick={handleSearch}> </div>
        </div>
    )
}



export default MidContainer;