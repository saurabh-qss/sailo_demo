import React from "react";


const DisplayName = ({data})=>{
    return(
        <div className={"name"}>
            <p> {data.firstName} {data.middleName} {data.lastName}</p>
        </div>
    )
};

const DisplayDetails  = ({data})=>{
    return(
        <div className={"detailsWrapper"}>
            <div>
                <span className={"title"}>Email :</span>
                <span style={{marginLeft: "50px"}}>{data.email}</span>
            </div>
            <div>
                <span className={"title"}>Group :</span>
                <span style={{marginLeft: "50px"}}>{data.group}</span>
            </div>
        </div>
    )
}

const UserDetails = ({data})=>{
    return(
        <div className={"userDetails"}>
            <DisplayName data = {data}/>
            <DisplayDetails data = {data}/>
        </div>
    )
};

export default React.memo(UserDetails);