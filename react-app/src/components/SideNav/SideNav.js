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
         <div  style={{ marginLeft:"2rem", marginTop:"2rem"}}>
           <NavLink to="/" exact={true} style={{color:"black"}}>
             <HomeIcon style={{ color: '#636363' }} />
           </NavLink>
         </div>

         <div style={{ marginLeft:"2rem", marginTop:"2rem"}}>
           <MailOutlineRoundedIcon style={{ color: '#3748A3' }}/>
         </div>
         <NavLink to="/create_showcase" exact={true} activeClassName="active" style={{textDecoration:"none",color:"black", padding:"1rem"}}>
         <div style={{ marginLeft:"2rem", marginTop:"2rem"}}>
           <InsertDriveFileRoundedIcon style={{ color: '#FAAE43' }}/>
         </div>
         </NavLink>
         <div style={{ marginLeft:"2rem", marginTop:"2rem"}}>
           <FolderIcon style={{ color: '#636363' }}/>
         </div>
         <div style={{ marginLeft:"1rem", marginTop:"2rem"}}>
          <NavLink to="/users" exact={true} activeClassName="active" style={{textDecoration:"none",color:"black", padding:"1rem"}}>
            <GroupIcon style={{ color: '#3748A3' }}/>
           </NavLink>
         </div>
         <div style={{marginLeft:"1rem", marginTop:"2rem"}} >
           <NavLink to="/all_showcases" exact={true} activeClassName="active" style={{textDecoration:"none",color:"#636363", padding:"1rem", marginRight:"15rem"}}>
           <DashboardIcon style={{color:"#FAAE43"}}/>
           </NavLink>
         </div>
         <div style={{ marginLeft:".5rem", marginTop:"2rem"}}>
           <GitHubIcon style={{ color: '#636363', marginLeft:"1.6rem",marginTop:"0rem"}}/>
         </div>
         <div  style={{marginLeft:".5rem", marginTop:"0rem"}}>
           <LinkedInIcon style={{ color: '#636363', marginLeft:"1.6rem", marginTop:"0rem" }}/>
         </div>
         <div style={{marginLeft:"1.3rem", marginTop:"0rem"}}>
           <img src={profilePic} ></img>
         </div>
         <div style={{fontSize:"10px",marginLeft:"1rem", marginTop:"-.7rem", color:"#636363"}} >
           <h4>
             Amber Horn
           </h4>
         </div>
       </div>
    );
}

export default SideNav