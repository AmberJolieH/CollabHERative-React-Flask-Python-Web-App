import React from 'react';
// import logo from "react-app/src/images/CollabHERativelogo2.svg"
// import LoginForm from "..LoginForm/auth/LoginForm"
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';
import { NavLink } from 'react-router-dom';
import "../topNav/navbar.css"
import profilePic from "../../images/amber.svg"
import FolderIcon from '@material-ui/icons/Folder';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GroupIcon from '@material-ui/icons/Group';
import DashboardIcon from '@material-ui/icons/Dashboard';

// SIDE NAV BAR 
const SideNav = () => {
    return (
      // (material ui icons legend)
      // HOMEICON = HOUSE = route to home
      // MailOutlineRoundedIcon = LETTER = route to messages
      // InsertDriveFileRoundedIcon = DOCUMENT FOLDED = create a project form
      // FolderIcon = FOLDER = route to create opportunities form 
      // GroupIcon = PEOPLE = route to view all users
      // DashboardIcon = squares = route to view all projects

    <div className="sideNav">
         <div  style={{ marginLeft:"2.5rem", marginTop:"2rem"}}> 
           <NavLink to="/" exact={true} style={{color:"black"}}>
             <HomeIcon style={{ color: '#636363' }} />
           </NavLink>
         </div>
        
         <NavLink to="/chat" exact={true} activeClassName="active" style={{ marginLeft:"2.5rem", marginTop:"2rem"}}>
           <div style={{ marginLeft:"2.5rem", marginTop:"1rem"}}>
           <MailOutlineRoundedIcon style={{ color: '#636363' }}/>
            </div>
           </NavLink>
        
         <NavLink to="/create_showcase" exact={true} activeClassName="active" style={{textDecoration:"none",color:"black", padding:"1rem"}}>
         <div style={{ marginLeft:"2.5rem", marginTop:"1rem"}}>
           <InsertDriveFileRoundedIcon style={{ color: '#636363' }}/>
         </div>
         </NavLink>
         <div style={{ marginLeft:"2.5rem", marginTop:"1rem"}}>
           <FolderIcon style={{ color: '#636363' }}/>
         </div>
         <div style={{ marginLeft:"1.5rem", marginTop:"2rem"}}>
          <NavLink to="/users" exact={true} activeClassName="active" style={{textDecoration:"none",color:"black", padding:"1rem"}}>
            <GroupIcon style={{ color: '#636363' }}/>
           </NavLink>
         </div>
         <div className=".uiButton" style={{marginLeft:"1.5rem", marginTop:"2rem"}} >
           <NavLink to="/all_showcases" exact={true} activeClassName="active" style={{textDecoration:"none",color:"#636363", padding:"1rem", marginRight:"15rem"}}>
           <DashboardIcon/>
           </NavLink>
         </div>
         <div style={{ marginLeft:".8rem", marginTop:"12rem"}}>
           <a href="https://github.com/AmberJolieH" >
           <GitHubIcon style={{ color: '#636363', marginLeft:"1.6rem",marginTop:"3rem"}}/>
           </a>
         </div>
         <div  style={{marginLeft:".8rem", marginTop:"0rem"}}>
           <a href="https://www.linkedin.com/in/amber-horn-202743152">
           <LinkedInIcon style={{ color: '#636363', marginLeft:"1.6rem", marginTop:"0rem" }}/>
           </a>
         </div>
         <div style={{marginLeft:"1.5rem", marginTop:"0rem"}}>
           <img src={profilePic} ></img>
         </div>
         <div style={{fontSize:"10px",marginLeft:"1.5rem", marginTop:"-.8rem", color:"#636363"}} >
           <h4>
             Amber Horn
           </h4>
         </div> 
       </div>
    );
} 

export default SideNav