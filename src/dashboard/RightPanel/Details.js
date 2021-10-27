import React, {useContext} from "react";
import Footer from './Footer/Footer';
import {listContext} from "../store";
import Image from "./Details/Image";
import UserDetails from "./Details/DisplayDetails";

const Main = ({data})=>{
    return(
        <div className={"details"}>
            <Image data = {data}/>
            <UserDetails data = {data}/>
        </div>
    )
}

const Details = ({selected, onSelect})=>{
    const {value, setData} = useContext(listContext);
    let selectedData = value.find((item)=>(item.id === selected));
    if(selectedData){
        return (
            <div className={"rightContainer"}>
                <Main data = {selectedData} list = {value}/>
                <Footer data = {selectedData} list = {value} setData = {setData} onSelect = {onSelect}/>
            </div>
        )
    }
    return null;
};

export default React.memo(Details);

