import React from "react";
import {getGroupWiseList} from "../common/utils";

const Listing = ({search, value: list, selected, onSelect})=>{
    let searchVal = search.trim().toLowerCase(),
        filteredList = searchVal ? list.filter(item=>(item.firstName.toLowerCase().includes(searchVal) || item.lastName.toLowerCase().includes(searchVal) || item.middleName.toLowerCase().includes(searchVal) || item.fullName.toLowerCase().includes(searchVal))) : list,
        groupedObj = getGroupWiseList({list: filteredList}),
        val = [];

    for (const key in groupedObj) {
        let groupedList = groupedObj[key];
        val.push(<span className = "listHeader">{key.toUpperCase()}</span>)
        groupedList.map((item, index)=>{
            let {middleName = ""} = item;
            middleName = middleName.trim();
            middleName = middleName.length > 1 ? middleName.substring(0, 1)+"." :  middleName;
            val.push(<li key = {index + item.firstName} className={selected === item.id ? 'selected' : ''} onClick={()=>onSelect(item.id)}>{item.firstName + " " + middleName + " " + item.lastName}</li>)
        });
    }

    return (
        <div className={'listing'}>
            <ul>
                {val}
            </ul>
        </div>
    )
};


export default React.memo(Listing);