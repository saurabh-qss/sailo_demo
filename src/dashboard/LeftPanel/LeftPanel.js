import React, {useCallback, useContext, useState} from "react";
import AddButton from './AddDetails';
import Listing from "./Listing";
import {listContext} from "../store";


const Search = ({search, onSearch})=>{
    return (
        <div className={"inputWrapper"}>
            <input className={"inputField"} placeholder = {"Search..."} value = {search} onChange={onSearch}/>
        </div>
    )
};

const LeftMenu = ({onSelect, selected, })=>{
    const {value} = useContext(listContext),
        [search, setSearch] = useState(''),
        onSearch = useCallback((e)=>{
            let val = e.target.value;
                setSearch(val);
                onSelect('');
        }, [value, search]);

    return (
        <div className={'leftMenuContainer'}>
            <Search onSearch = {onSearch} search = {search}/>
            <Listing value = {value} search = {search} selected = {selected} onSelect = {onSelect}/>
            <AddButton/>
        </div>
    )
};

export default React.memo(LeftMenu);