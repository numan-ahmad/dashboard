import React from "react";


const TimeDiv = () =>{

    const newtime = new Date().toLocaleString('en-US',{hour:'numeric',minute:'numeric',hour12:true});
    const newdate = new Date().toLocaleString('default',{month:'long',day:'numeric',year:'numeric'});
    return(
        <div className="center_div">
            <p>Islamabad</p>
            <h1 className="about_para">{newtime}</h1>
            <p>{newdate}</p>

        </div>
    );
};

export default TimeDiv;