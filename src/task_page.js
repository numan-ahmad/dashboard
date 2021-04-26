import React from "react";

const Taske = () =>{
    
    return(
     <div className="taske_page">
         <h2 className="heading_task">Task to do</h2>
         <p className="para_task">Hi my name is Numan Ahmad and i workig now as a front-end developer and also leaerning about Artifical Intelligince.Know i am working on React js.</p>
         <div className="first_div">
                <div className="true_sign"><i className="fa fa-check"></i></div>
                <div className="delete_icon"><i className="fa fa-trash"></i></div>

                <div className="taske_value"><h4 >Wireframing</h4></div>

         </div>
         <div className="second_div">
         <div className="true_sign"><i className="fa fa-check"></i></div>
         <div className="delete_icon"><i className="fa fa-trash"></i></div>

                <div className="taske_value"><h4 >Design Interaction</h4></div>
         </div>
         <div className="third_div">
         <div className="true_sign"> <i className="fa fa-check"></i></div>
         <div className="delete_icon"><i className="fa fa-trash"></i></div>

                <div className="taske_value"><h4 >Wireframe Update</h4></div>
         </div>

         <button className="pluse_btn"> + </button>

     </div>
);};

export default Taske;