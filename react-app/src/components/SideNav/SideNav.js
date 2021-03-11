import React from 'react';
// import logo from "react-app/src/images/CollabHERativelogo2.svg"
// import LoginForm from "..LoginForm/auth/LoginForm"
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';
import { NavLink } from 'react-router-dom';
import "../navbar.css"
const SideNav = () => {
    return (
        <div>
            <div>
                <div className="sideNav">
         <div  style={{ marginLeft:"1.6rem", marginTop:"4rem"}}>
           <NavLink to="/" exact={true}>
             <HomeIcon/>
           </NavLink>
         </div>
         <div style={{ marginLeft:"1.6rem", marginTop:"3rem"}}>
           <MailOutlineRoundedIcon/>
         </div>
         <div style={{ marginLeft:"1.6rem", marginTop:"3rem"}}>
           <InsertDriveFileRoundedIcon/>
         </div>
       </div>
       <div className="centerNav">
         {/* <LoginForm/> */}
       </div>
            </div>
        </div>
    );
}

export default SideNav