import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

import "./navbar.css"
import LoginForm from "./LoginFormModal"
import SignupForm from "./auth/SignUpForm"
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';
import ListShowcases from "./showcase/ListShowcases"
import { listshowcases } from '../store/showcase';
import profilePic from "../images/amber.svg"
import FolderIcon from '@material-ui/icons/Folder';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo from "../images/logoNew.svg"
const NavBar =({ setAuthenticated, authenticated }) => {
   return (
     <nav>
       <div className="top-navbar" style={{display:"flex", alignItems:"center"}} >
          
            <img src={logo} alt="React Logo"/>
           
           {authenticated && (
             
            <div  style={{display:"flex", justifyContent: "space-between", alignItems:"center", height:"100%"}}>
                  <div>
                  <NavLink to="/users" exact={true} activeClassName="active" style={{textDecoration:"none",color:"black", padding:"1rem"}}>
                    Community
                  </NavLink>
                  </div>
                  <div>
                  <NavLink to="/create_showcase" exact={true} activeClassName="active" style={{textDecoration:"none",color:"black", padding:"1rem"}}>
                    Create a Project
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/all_showcases" exact={true} activeClassName="active" style={{textDecoration:"none",color:"black", padding:"1rem", marginRight:"15rem"}}>
                    Project Board
                  </NavLink>
                </div>
            <div >
              <LogoutButton setAuthenticated={setAuthenticated} />
            </div>
          </div>
            
         )}
        {!authenticated && (
          <div style={{
          display: "flex",
          // flexFlow: "row wrap",
          alignItems: "center",
          height:"100%",
          justifyContent: "space-between",}}>
            <div style={{textDecoration:"none",color:"#3D3D3D",display:"flex", justifyContent: "space-between", alignItems:"center", height:"100%"}}>
              <div >
                <LoginForm   setAuthenticated={setAuthenticated}/>
              </div>
              <div className="signupButton">
                <NavLink to="/sign-up" exact={true}activeClassName="active"
                style={{
                  borderRadius: "2rem",
                  padding: "0.02rem",
                  color: "white",
                  border: "0px",
                  textDecoration: "none",
                  fontSize: "-1rem",
                  marginLeft: ".5rem"
                }}>
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
         )}
       </div>
     </nav>
   );
 }

export default NavBar

