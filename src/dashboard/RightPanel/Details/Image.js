import React from "react";


const Image = ({data})=>{
    const firstChar = data.firstName.substring(0, 1).toUpperCase();
    const lastChar = data.lastName.substring(0, 1).toUpperCase();
    return(
        <div className={'imageWrapper'}>
            <div className={'image'}>
                <span>{firstChar} {lastChar}</span>
            </div>
        </div>
    )
};

export default React.memo(Image);