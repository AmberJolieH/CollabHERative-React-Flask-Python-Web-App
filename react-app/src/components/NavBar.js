import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import logo from "../images/CollabHERativelogo2.svg"
import "./navbar.css"
import LoginForm from "./auth/LoginForm"
import SignupForm from "./auth/SignUpForm"
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';
import ListShowcases from "./showcase/ListShowcases"
import { listshowcases } from '../store/showcase';

const NavBar =({ setAuthenticated, authenticated }) => {
   return (
     <nav>
       <div className="navbar-card" style={{alignSelf: "flex-start",
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "space-between",}}>
         <div>
             <img src={logo} alt="React Logo" style={{ marginLeft:"1rem", }} />
           </div>
           
           {authenticated && (
             
            <div style={{display:"flex", justifyContent: "space-between"}}>
              <div>
              <NavLink to="/users" exact={true} activeClassName="active" style={{textDecoration:"none",color:"black", padding:"1rem"}}>
                Users
              </NavLink>
              </div>
              <div>
              <NavLink to="/create_showcase" exact={true} activeClassName="active" style={{textDecoration:"none",color:"black", padding:"1rem"}}>
                Create a Showcase
              </NavLink>
            </div>
            <div>
              <NavLink to="/all_showcases" exact={true} activeClassName="active" style={{textDecoration:"none",color:"black", padding:"1rem"}}>
                view all Showcases
              </NavLink>
            </div>
            <div>
              <LogoutButton setAuthenticated={setAuthenticated} />
            </div>
            <div className="rightNav">
              <LoginForm setAuthenticated={setAuthenticated}/>
            </div>
            <div className="centerNav">
              <ListShowcases/>
            </div>
          </div>
            
         )}
        {!authenticated && (
          <div className="logged_out" style={{alignSelf: "flex-start",
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "space-between",}}>
              <div >
                <NavLink to="/login" exact={true} activeClassName="active" style={{textDecoration:"none",color:"black"}}>
                  Login
                </NavLink>
              </div>
              <div className="rightNav">
              <LoginForm setAuthenticated={setAuthenticated}/>
            </div>
              <div className="signupButton" >
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
         )}
       </div>
       <div className="sideNav">
         <div  style={{ marginLeft:"1.6rem", marginTop:"4rem"}}>
           <NavLink to="/" exact={true} style={{color:"black"}}>
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
      
       <div className="rightNav">
         <LoginForm/>
       </div>
        
     </nav>
   );
 }

export default NavBar

