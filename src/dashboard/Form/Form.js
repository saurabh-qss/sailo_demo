
import * as React from 'react';
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    MenuItem, Select, Checkbox, FormGroup, FormControlLabel, FormControl, InputLabel
} from "@material-ui/core";
import {useCallback, useState} from "react";
import _ from 'underscore';
import {DEFAULT_VALUE} from "../common/Constants";
import {validateFields} from "../common/utils";


function FormDialog({open, onClick, onSave, title = "Add", data}) {
    const [details, setDetails] = useState(data || DEFAULT_VALUE),
        [errors, setErrors] = useState({}),
        onChange = useCallback((e)=>{
            let {id, value} = e.target;
            value = value.trim();
            if(value && (id === "firstName" || id === "lastName" || id === "middleName")){
                value = value.substring(0, 1).toUpperCase() + value.substring(1, value.length);
            }
            let val = Object.assign({}, details, {[id]: value});
                if(errors.hasOwnProperty(id)){
                    delete errors[id];
                }
                setDetails(val);
        }, [details, errors]),
        onSubmit = useCallback(()=>{
             let newError = validateFields(details);
                 setErrors(newError);
                 if(_.isEmpty(newError)){
                     setDetails({});
                      setErrors({});
                     onSave(details);
                 }
        }, [details, errors]),
        onClose = useCallback(()=>{
              setDetails({});
              setErrors({});
              onClick();
        },[]),
        firstChar = (details.firstName && details.firstName.substring(0, 1).toUpperCase()) || '',
        lastChar = (details.lastName && details.lastName.substring(0, 1).toUpperCase()) || '';

    return (
        <div>
            <Dialog open={open} onClose={onClose} className={"formWrapper"}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                {
                   title !== "Add" ? (
                      <DialogContentText className={"formImageContentWrapper"}>
                            <div className={'imageWrapper'}>
                                <div className={'image'}>
                                    <span>{firstChar.toUpperCase()} {lastChar.toUpperCase()}</span>
                                </div>
                            </div>
                        </DialogContentText>) : null
                 }

                    <TextField
                        margin="dense"
                        id="firstName"
                        label="First Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value = {details['firstName']}
                        error={errors['firstName']}
                        helperText={errors['firstName']}
                        onChange={onChange}
                    />
                    <TextField
                        margin="dense"
                        id="middleName"
                        label="Middle Name"
                        type="test"
                        fullWidth
                        value = {details['middleName']}
                        variant="standard"
                        onChange={onChange}
                    />
                    <TextField
                        margin="dense"
                        id="lastName"
                        label="Last Name"
                        type="text"
                        fullWidth
                        value = {details['lastName']}
                        variant="standard"
                        onChange={onChange}
                        error={errors['lastName']}
                        helperText={errors['lastName']}
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        value = {details['email']}
                        fullWidth
                        variant="standard"
                        onChange={onChange}
                        error={errors['email']}
                        helperText={errors['email']}
                    />
                    <FormControl margin="dense" fullWidth>
                        <InputLabel id="group">Group</InputLabel>
                        <Select
                            labelId="Group"
                            id="group"
                            value = {details['group']}
                            label="Group"
                            margin="dense"
                            fullWidth
                            error={errors['group']}
                            helperText={errors['group']}
                            onChange={(e)=>onChange({target:{id: 'group', value: e.target.value}})}
                        >
                            <MenuItem id={'group'} value={'Family'}>Family</MenuItem>
                            <MenuItem id={'group'} value={'Friends'}>Friends</MenuItem>
                            <MenuItem  id={'group'} value={'School'}>School</MenuItem>
                            <MenuItem  id={'group'} value={'Work'}>Work</MenuItem>
                        </Select>
                    </FormControl>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox id = {'hideNotification'} value = {details['hideNotification']} onChange={onChange} defaultChecked={false} />} label="Hide notification from this contact" />
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={onSubmit}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};


export default React.memo(FormDialog);