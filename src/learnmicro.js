import React from "react";

const LearnMicro = () =>{
    const newdate = new Date().toLocaleString('default',{month:'long',day:'2-digit',year:'numeric'});

    return(
        <div className="learnMiro">
         <div className="image"></div>
         <h2 className="h22">Learn Microinteraction</h2>
         <p className="time_lernMicro">{newdate}</p>
         <p className="paragrph_learmmicro">Hi my name is Numan Ahmad and i workig now as a front-end developer and also leaerning about Artifical Intelligince.Hi my name is Numan Ahmad.</p>
         <button className="readblog"><h4>Read Full Blog</h4></button>
         <button className="blog"><h3>BLOG</h3></button>
        </div>
    );
};

export default LearnMicro;