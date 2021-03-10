import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import logo from "../images/CollabHERativelogo2.svg"
import "./navbar.css"
import halfCircle from "../images/half-circle.svg"
import LoginForm from "./auth/LoginForm"

const NavBar = ({ setAuthenticated, authenticated }) => {
  const [c1,setc1] = useState(true)
  const [c2,setc2] = useState(true)
  const [c3,setc3] = useState(true)
  const [c4,setc4] = useState(true)
  return (
    
    <>
    
    <nav>
      <div className="nav">
        <NavLink exact to="/">
          <img src={logo} alt="React Logo" />
        </NavLink>
        {authenticated && (
          <div>
            <div>
              <NavLink
                to="/users"
                exact={true}
                activeClassName="active">
                The Community
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/all_showcases"
                exact={true}
                activeClassName="active">
                Project Showcase
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/users/${user.id}"
                exact={true}
                activeClassName="active">
                My Profile
              </NavLink>
            </div>
              <div>
              <NavLink
                to="/users/${user.id}"
                exact={true}
                activeClassName="active">
                About
              </NavLink>
            </div>
            <div>
              <LogoutButton setAuthenticated={setAuthenticated} />
            </div>
          </div>
        )}
        {!authenticated && (
          <div>
            <div className={c1?"circlemenu1":"click1"} onClick={()=> setc1(!c1)}>
              {/* <img src={halfCircle} style={{marginTop:"27rem"}}></img> */}
              {c1?<><div>
                  <NavLink
                    to="/login"
                    exact={true}
                    activeClassName="active"
                  >
                    Login
                  </NavLink>

                </div>
                </>:
                
                <> <LoginForm/> </>
                }

            </div>
            <div className={c2?"circlemenu2":"click2"}onClick={()=> setc1(!c2)}></div>
            <div className={c3?"circlemenu3":"click3"}onClick={()=> setc1(!c3)}></div>
            <div className={c4?"circlemenu4":"click4"}onClick={()=> setc1(!c4)}></div>
            <div>
                
                <div className='text-button' >
                  <NavLink
                    to="/sign-up"
                    exact={true}
                    activeClassName="active">
                    Sign Up
                  </NavLink>
                </div>
              </div>
          </div>
        )}
      </div>
    </nav>
  </>
  );
};


export default NavBar

