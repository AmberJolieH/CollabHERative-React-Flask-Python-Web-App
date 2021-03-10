import React from 'react';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import logo from "../images/CollabHERativelogo2.svg"
// const NavBar =({ setAuthenticated, authenticated }) => {
//   return (
//     <nav>
//       <div>
//         <div>
//           <NavLink to="/" exact={true} activeClassName="active">
//             <img src={logo} alt="React Logo" style={{ display:"flex", }} />
//           </NavLink>
//       </div>
//         <div>
//           <NavLink to="/login" exact={true} activeClassName="active">
//             Login
//           </NavLink>
//         </div>
//         <div>
//           <NavLink to="/sign-up" exact={true} activeClassName="active">
//             Sign Up
//           </NavLink>
//         </div>
//         <div>
//           <NavLink to="/users" exact={true} activeClassName="active">
//             Users
//           </NavLink>
//         </div>
//           <div>
//           <NavLink to="/create_showcase" exact={true} activeClassName="active">
//             Create a Showcase
//           </NavLink>
//         </div>
//         <div>
//           <NavLink to="/all_showcases" exact={true} activeClassName="active">
//             view all Showcases
//           </NavLink>
//         </div>
//         <div>
//           <LogoutButton setAuthenticated={setAuthenticated} />
//         </div>
//       </div>
//     </nav>
//   );
// }

const NavBar = ({ setAuthenticated, authenticated }) => {
  return (
    <nav>
      <div>
        <NavLink exact to="/">
          <img src={logo} alt="React Logo" style={{ display:"flex", }}/>
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
            <div>
                <div>
                  <NavLink
                    to="/login"
                    exact={true}
                    activeClassName="active"
                  >
                    Login
                  </NavLink>
                </div>
                <div style={{marginTop:"0rem"}} >
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
  );
};


export default NavBar;

