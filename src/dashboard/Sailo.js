import React, {useState} from "react";
import Left from "./LeftPanel/LeftPanel";
import Details from "./RightPanel/Details";


const Sailo = ()=>{
    const [selected, setSelected] = useState(1);
    const onSelect=  (id)=>{
        setSelected(id)
    };
    return (
        <div className = "container">
            <Left selected = {selected} onSelect = {onSelect}/>
            <Details selected = {selected} onSelect = {onSelect}/>
        </div>
    )
};

export default React.memo(Sailo);