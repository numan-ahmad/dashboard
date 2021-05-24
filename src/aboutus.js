import React from "react";

const AboutUs = () =>{
 return(
     <div className="about_us">
         <div className="circle"></div>
         <ul className="about_us_list">
             <li>Post <br /><h3>23</h3></li>
             <li>Followers <br /><h3>326</h3></li>
             <li>Follwing <br /><h3>120</h3></li>

         </ul>
         <br/>
         <div className="inner_child_time">
         <h4>Numan Ahmad</h4>
         <p className="about_para">UI / UX Designer</p>
         <br/>
         <h4>About</h4>
         <p>Hi my name is Numan Ahmad and i workig now as a front-end developer and also leaerning about Artifical Intelligince</p>
         </div>
         </div>
    
     
 );
};

export default AboutUs;