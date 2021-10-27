import React, {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";


const DeleteDialog = ({open, onClose, onDelete})=>{
    return(
       <Dialog open={open} onClose={onClose} >
           <DialogTitle>Confirm</DialogTitle>
           <DialogContent>
               <DialogContentText className={"formImageContentWrapper"}>
                   Are you sure you want to delete this record?
               </DialogContentText>
           </DialogContent>
           <DialogActions>
               <Button onClick={onClose}>No</Button>
               <Button onClick={onDelete}>Yes</Button>
           </DialogActions>
       </Dialog>
    )
};


const Delete = (props)=>{
    const [open, setOpen] = useState(false),
        {data, list, setData, onSelect} = props,
        onClick = ()=>{
            setOpen(true);
        },
        onClose = ()=>{
            setOpen(false);
        },
        onDelete = ()=>{
            let val = [];
                list.map(item=>{
                    if(item.id !== data.id){
                        val.push(item);
                    }
                });
                setData(val);
                onSelect('');
        };

    return(
        <>
            <Button variant={'contained'} color='secondary' onClick = {onClick}> Delete </Button>
            <DeleteDialog open = {open} onClose = {onClose} onDelete = {onDelete}/>
        </>
    )
};

export default React.memo(Delete);