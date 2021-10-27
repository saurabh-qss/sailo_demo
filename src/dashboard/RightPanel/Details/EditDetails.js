import React, {useState} from 'react';
import _ from "underscore";
import {Button} from "@material-ui/core";
import FormDialog from "../../Form/Form";

const EditDetails = ({data, list, setData})=>{
    const [open, setOpen] = useState(false),
        onClick = ()=>{
            setOpen(!open);
        },
        onSave = (data)=>{
            let oldValue = _.clone(list),
                index = oldValue.findIndex((item)=>(item.id === data.id));
                if(index > -1){
                    oldValue[index] = data;
                }
                setData(oldValue);
                onClick();
        };

    return(
        <>
            <Button variant={'contained'} color='primary' onClick={onClick}> Edit </Button>
            {open ? <FormDialog open = {open} onClick={onClick} onSave = {onSave} title = {"Edit"} data = {data}/> : null}
        </>
    )
}

export default EditDetails;
