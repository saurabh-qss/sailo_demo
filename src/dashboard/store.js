import React, {useState, useCallback, useEffect} from 'react';


const MOCK_DATA = [
    {id: 1, fullName: 'Saurabh Singh', firstName: 'Saurabh', middleName: '', lastName: 'Singh', email: 'saurabhabic@gmail.com', group: 'Friends'},
    {id: 2, fullName: 'Ankur Singh', firstName: 'Ankur', middleName: '', lastName: 'Singh', email: 'ankur@gmail.com', group: 'Friends'},
    {id: 3, fullName: 'Maneesh Sharma', firstName: 'Maneesh', middleName: '', lastName: 'Sharma', email: 'maneesh@gmail.com', group: 'Friends'},
    {id: 4, fullName: 'Vinay Prasad', firstName: 'Vinay', middleName: '', lastName: 'Prasad', email: 'vinay@gmail.com', group: 'Friends'},
    {id: 5, fullName: 'Vishal Gupta', firstName: 'Vishal', middleName: '', lastName: 'Gupta', email: 'vishal@gmail.com', group: 'Friends'},
    {id: 6, fullName: 'Vishal Singh', firstName: 'Vishal', middleName: '', lastName: 'Singh', email: 'vishal2@gmail.com', group: 'Friends'},
    {id: 7, fullName: 'Vishal Solanki', firstName: 'Vishal', middleName: '', lastName: 'Solanki', email: 'vishal3@gmail.com', group: 'Friends'},
    {id: 8, fullName: 'Zaigam Khan', firstName: 'Zaigam', middleName: '', lastName: 'Khan', email: 'vishal4@gmail.com', group: 'Friends'},
]

export const listContext = React.createContext(JSON.parse(localStorage.getItem("data") || "[]"));

export const useStore = ()=>{
    const [value, setValue] = useState([]);
    const setData = useCallback((data)=>{
        localStorage.setItem("data", JSON.stringify(data));
        setValue(data);
    }, []);
    useEffect(()=>{
        const rawData = localStorage.getItem("data") || "[]";
        let data = JSON.parse(rawData);
        if(!data.length){
            data = MOCK_DATA;
            setData(data);
        }
        setValue(data);
    }, []);

    return{
        value,
        setData
    }
};