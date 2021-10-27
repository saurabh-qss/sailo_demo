import {EMAIL_REGEX, MANDATORY_FIELDS} from "./Constants";

const validateFields = (details) =>{
    let newError = {};
    MANDATORY_FIELDS.map(item=>{
        if(!(details[item] && details[item].trim())){
            newError[item] = 'This field is required';
        }else{
            delete newError[item];
        }
    });

    if(details.email && details.email.trim()){
        let isValid = EMAIL_REGEX.test(String(details.email.trim()).toLowerCase());
        if(!isValid){
            newError['email'] = 'Invalid email address';
        }
    }

    return newError
};


const getGroupWiseList = ({list})=>{
    let newlist = list.sort((a, b)=>(a.firstName.toLowerCase() >  b.firstName.toLowerCase() ? 1 : -1)),
        obj = {};
    newlist.map((item)=>{
        let firstChar = item.firstName.substring(0, 1);
        if(obj.hasOwnProperty(firstChar.toLowerCase())){
            obj[firstChar.toLowerCase()].push(item);
        }else{
            obj[firstChar.toLowerCase()] = [item];
        }
    });
    return obj;
};


export { validateFields, getGroupWiseList }
