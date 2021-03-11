import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import logo from "../images/CollabHERativelogo2.svg"
import "./navbar.css"
import LoginForm from "./auth/LoginForm"
import SignupForm from "./auth/SignUpForm"


const NavBar =({ setAuthenticated, authenticated }) => {
   return (
     <nav>
       <div className="navbar-card" style={{
          alignSelf: "flex-start",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
         <div>
           <NavLink to="/" exact={true} activeClassName="active">
             <img src={logo} alt="React Logo" style={{ display:"flex", }} />
           </NavLink>
       </div>
         <div className="text-button">
           <NavLink to="/login" exact={true}>
             Login
           </NavLink>
         </div>
         <div>
           <NavLink to="/sign-up" exact={true} activeClassName="active">
             Sign Up
           </NavLink>
         </div>
         <div>
           <NavLink to="/users" exact={true} activeClassName="active">
             Users
           </NavLink>
         </div>
           <div>
           <NavLink to="/create_showcase" exact={true} activeClassName="active">
             Create a Showcase
           </NavLink>
         </div>
         <div>
           <NavLink to="/all_showcases" exact={true} activeClassName="active">
             view all Showcases
           </NavLink>
         </div>
         <div>
           <LogoutButton setAuthenticated={setAuthenticated} />
         </div>
       </div>
     </nav>
   );
 }

export default NavBar

