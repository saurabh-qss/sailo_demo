import {Button} from "@material-ui/core";
import React from "react";
import EditDetails from "../Details/EditDetails";
import Delete from "./Delete";


const LeftFooter = (props)=>{
    return(
        <div className={"leftFooter"}>
            <Button variant={'outlined'} style={{backgroundColor: '#12824C', color: '#FFFFFF'}}> Share </Button>
            <EditDetails {...props}/>
        </div>
    )
}

const RightFooter = (props)=>{
    return(
        <div className={"rightFooter"}>
            <Delete {...props}/>
        </div>
    )
};

const Footer = (props)=>{
    return(
        <div className={"footer"}>
            <LeftFooter {...props}/>
            <RightFooter {...props}/>
        </div>
    )
};

export default Footer;