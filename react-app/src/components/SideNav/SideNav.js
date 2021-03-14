import React from 'react';
// import logo from "react-app/src/images/CollabHERativelogo2.svg"
// import LoginForm from "..LoginForm/auth/LoginForm"
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';
import { NavLink } from 'react-router-dom';
import "../navbar.css"
import profilePic from "../../images/amber.svg"
import FolderIcon from '@material-ui/icons/Folder';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const SideNav = () => {
    return (
    <div className="sideNav">
         <div  style={{ marginLeft:"1.6rem", marginTop:"4rem"}}>
           <NavLink to="/" exact={true} style={{color:"black"}}>
             <HomeIcon style={{ color: '#3748a3' }} />
           </NavLink>
         </div>

         <div style={{ marginLeft:"1.6rem", marginTop:"3rem"}}>
           <MailOutlineRoundedIcon style={{ color: '#faae43' }}/>
         </div>
         <div style={{ marginLeft:"1.6rem", marginTop:"3rem"}}>
           <InsertDriveFileRoundedIcon style={{ color: '#feb9c1' }}/>
         </div>
         <div style={{ marginLeft:"1.6rem", marginTop:"3rem"}}>
           <FolderIcon style={{ color: '#f55645' }}/>
         </div>
         <div>
           <GitHubIcon style={{ color: '#3748a3', marginLeft:"1.6rem",marginTop:"8rem"}}/>
         </div>
         <div>
           <LinkedInIcon style={{ color: '#3748a3', marginLeft:"1.6rem", marginTop:"0rem" }}/>
         </div>
         <div style={{marginLeft:"1rem", marginTop:".2rem"}}>
           <img src={profilePic} ></img>
         </div>
         <div>
           <p style={{fontSize:"10px",marginLeft:".8rem", marginTop:"-.5rem", color:"#3D3D3D"}}>
             Amber Horn
           </p>
         </div>
       </div>
    );
}

export default SideNav