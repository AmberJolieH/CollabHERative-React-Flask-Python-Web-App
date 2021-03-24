import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import {useSelector} from "react-redux"
import "./navbar.css"
import LoginForm from "../LoginFormModal"
import SignupForm from "../auth/SignUpForm"
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';
import ListShowcases from "../showcase/ListShowcases"
import { listshowcases } from '../../store/showcase';
import profilePic from "../../images/amber.svg"
import FolderIcon from '@material-ui/icons/Folder';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo from "../../images/logoNew.svg"
import CenterCard from '../centerCard/centerCard';


const NavBar =({ setAuthenticated, authenticated }) => {
  const user = useSelector(state => state.session.user)
  const [isloaded, setIsLoaded] = useState(false);
  // useEffect(()=> {
  //   if (user) setIsLoaded(true)
  // }, [user])

  // if (!isloaded) return null;
   return (
     <nav className="navContainer">
       <div className="top-navbar" style={{display:"flex", alignItems:"center"}} >
          
            <img src={logo} alt="React Logo"/>
           
           { user && authenticated && (
             
            <div  style={{display:"flex", justifyContent: "space-between", alignItems:"center", height:"100%"}}>
                <div>
                  <NavLink to={`/users/${user.id}`} exact={true} activeClassName="active" style={{textDecoration:"none",color:"#FAAE43", marginRight:"10rem", marginLeft:"10rem"}}>
                    My Projects
                  </NavLink>
                </div>
                <div>
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
          justifyContent: "space-between", padding:".5rem"}}>
            <div style={{textDecoration:"none",color:"#3D3D3D",display:"flex", justifyContent: "space-between", alignItems:"center", height:"100%", marginLeft:"35rem",}}>
              <div >
                <LoginForm   setAuthenticated={setAuthenticated} authenticated={authenticated}/>
              </div>
              <div className="signupButton" style={{marginRight:"1rem"}} >
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

