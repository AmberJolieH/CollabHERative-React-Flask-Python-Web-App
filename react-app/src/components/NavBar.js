import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import logo from "../images/newlogo.svg"
import "./navbar.css"
import LoginForm from "./auth/LoginForm"
import SignupForm from "./auth/SignUpForm"
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';
import ListShowcases from "./showcase/ListShowcases"
import { listshowcases } from '../store/showcase';
import profilePic from "../images/profile-Amber .svg"
import FolderIcon from '@material-ui/icons/Folder';

const NavBar =({ setAuthenticated, authenticated }) => {
   return (
     <nav>
       <div className="top-navbar" style={{alignSelf: "flex-start",
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "space-between",}}>
           <img src={logo} alt="React Logo" style={{ marginLeft:"1rem", marginTop:"0rem", position:"absolute"}} />
            
           
           {authenticated && (
             
            <div  style={{display:"flex", justifyContent: "space-between", marginLeft:"20rem", alignItems:"center"}}>
                  <div>
                  <NavLink to="/users" exact={true} activeClassName="active" style={{textDecoration:"none",color:"black", padding:"1rem", marginLeft:""}}>
                    Community
                  </NavLink>
                  </div>
                  <div>
                  <NavLink to="/create_showcase" exact={true} activeClassName="active" style={{textDecoration:"none",color:"black", padding:"1rem"}}>
                    Create a Project
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/all_showcases" exact={true} activeClassName="active" style={{textDecoration:"none",color:"black", padding:"1rem"}}>
                    Project Board
                  </NavLink>
                </div>
            <div >
              <LogoutButton setAuthenticated={setAuthenticated} />
            </div>
            <div className="rightNav">
              <LoginForm setAuthenticated={setAuthenticated}/>
            </div>
            <div className="centerNav">
              <ListShowcases setAuthenticated={setAuthenticated}/>
            </div>
          </div>
            
         )}
        {!authenticated && (
          <div style={{alignSelf: "flex-start",
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "space-between",}}>
            <div style={{textDecoration:"none",color:"#3D3D3D",display:"flex", justifyContent: "space-between", marginLeft:"55rem", alignItems:"center", marginTop:".5rem"}}>
             
              <div>
                <NavLink to="/login" exact={true} activeClassName="active" style={{textDecoration:"none",color:"#3D3D3D",marginRight:"3rem", marginLeft:""}} >
                  Login
                </NavLink>
              </div>
                <div className="rightNav">
                <LoginForm setAuthenticated={setAuthenticated}/>
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
       </div>
      
       <div className="rightNav">
         <LoginForm/>
       </div>
         <div className="centerNav">
           <img src="https://collabherative.s3.us-east-2.amazonaws.com/login.svg" style={{display:"flex", alignItems:"center", marginLeft:"2rem"}}/>
        </div>
     </nav>
   );
 }

export default NavBar

