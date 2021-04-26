import React from "react";

const Profile = () =>{

    return(
        <div className="profile">
        <div className="profi_pic"></div> 

        <button className="pro text2">Pro</button>
        <h4 className = "text1">Numan Ahmad</h4>
        <p className="text2">UI / UX Designer</p>
        <p className="text3">Hi my name is Numan Ahmad and i workig now as a front-end developer.</p>
        <div className="logos">
        <ul className="profile_list">
        <li><i className="fa fa-instagram "></i></li>
        <li><i className="fa fa-twitter"></i></li>
        <li><i class="fa fa-linkedin"></i></li>
        <li><i class="fa fa-facebook-f"></i></li>
        <li><i class="fa fa-behance"></i></li>

        </ul>
        </div>
        <button className="btn1">Message</button>
        <button className="btn2">Connect</button>

        </div>

    );
};

export default Profile;