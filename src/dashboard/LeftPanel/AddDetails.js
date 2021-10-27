import React, {useCallback, useContext, useState} from "react";
import {Button} from "@material-ui/core";
import FormDialog from "../Form/Form";
import _ from 'underscore';
import {listContext} from "../store";

const AddButton = ()=>{
    const [open, setOpen] = useState(false),
        {value, setData} = useContext(listContext),
        onClick = useCallback(()=>{
            setOpen(!open);
        }, [open]),
        onSave = useCallback((data)=>{
            let oldValue = _.clone(value),
                clonedData = _.clone(data);
                oldValue = oldValue.sort((a, b) => (a.id - b.id));
                clonedData['id'] = oldValue.length ? (oldValue[oldValue.length - 1].id + 1) || 1 : 1;
                clonedData['fullName'] = data.firstName + " " + (data.middleName || '') + " " + data.lastName;
                oldValue.push(clonedData);
                setData(oldValue);
                onClick();
    }, [value, open]);

    return(
        <div className={"leftMenuFooter"}>
            <Button variant={'contained'} color='primary' onClick={onClick}> Add </Button>
            <FormDialog open = {open} onClick={onClick} onSave = {onSave}/>
        </div>
    )
}

export default React.memo(AddButton);