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
import GroupIcon from '@material-ui/icons/Group';
import DashboardIcon from '@material-ui/icons/Dashboard';


const SideNav = () => {
    return (
    <div className="sideNav">
         <div  style={{ marginLeft:"1.6rem", marginTop:"1rem"}}>
           <NavLink to="/" exact={true} style={{color:"black"}}>
             <HomeIcon style={{ color: '#3748a3' }} />
           </NavLink>
         </div>

         <div style={{ marginLeft:"1.6rem", marginTop:"1rem"}}>
           <MailOutlineRoundedIcon style={{ color: '#faae43' }}/>
         </div>
         <NavLink to="/create_showcase" exact={true} activeClassName="active" style={{textDecoration:"none",color:"black", padding:"1rem"}}>
         <div style={{ marginLeft:"1.6rem", marginTop:"1rem"}}>
           <InsertDriveFileRoundedIcon style={{ color: '#feb9c1' }}/>
         </div>
         </NavLink>
         <div style={{ marginLeft:"1.6rem", marginTop:"1rem"}}>
           <FolderIcon style={{ color: '#f55645' }}/>
         </div>
         <div style={{ marginLeft:"1.6rem", marginTop:"3rem"}}>
          <NavLink to="/users" exact={true} activeClassName="active" style={{textDecoration:"none",color:"black", padding:"1rem"}}>
            <GroupIcon style={{ color: '#3D3D3D' }}/>
           </NavLink>
         </div>
         <div>
           <NavLink to="/all_showcases" exact={true} activeClassName="active" style={{textDecoration:"none",color:"black", padding:"1rem", marginRight:"15rem"}}>
           <DashboardIcon/>
           </NavLink>
         </div>
         <div>
           <GitHubIcon style={{ color: '#3748a3', marginLeft:"1.6rem",marginTop:"0rem"}}/>
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