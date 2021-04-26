import React from "react";
import TimeDiv from "./time";
import AboutUs from "./aboutus";
import Profile from "./profiles";
import Calender from "./calender";
import LearnMicro from "./learnmicro";
import SearchBar from "./searchbar";
import Expertise from "./experties"
import MessageNotifi from "./messageNotif";
import Taske from "./task_page";

const App = () =>{
   return(
     <div className="main_div">
       <TimeDiv />
       <AboutUs />
       <LearnMicro />
       <Profile />
       <Calender />
       <SearchBar />
       <Expertise />
       <MessageNotifi />
       <Taske />
     </div>
     
    );
};

export default App;