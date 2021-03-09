import React from 'react';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import logo from "../images/CollabHERativelogo2.svg"
const NavBar =({ setAuthenticated, authenticated }) => {
  return (
    <nav>
      <div>
        <div>
          <NavLink to="/" exact={true} activeClassName="active">
            <img src={logo} alt="React Logo" style={{ display:"flex", }} />
          </NavLink>

        </div>
        <div>
          <NavLink to="/login" exact={true} activeClassName="active">
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

// const NavBar = ({ setAuthenticated, authenticated }) => {
//   const sessionUser = useSelector((state) => state.session.user);
//   return (
//     <nav>
//       <div>
//         <NavLink exact to="/" exact={true} activeClassName="active">
//           <img src={logo} alt="React Logo" style={{ display:"flex", }}/>
//         </NavLink>
//         {authenticated && (
//           <div>
//             <div>
//               <NavLink
//                 to="/users"
//                 exact={true}
//                 activeClassName="active"
//                 className="button">
//                 The Community
//               </NavLink>
//             </div>
//             <div>
//               <NavLink
//                 to="/all_showcases"
//                 exact={true}
//                 activeClassName="active"
//                 className="button"
//                 css={{
//                   textDecoration: "none",
//                   color: "black",
//                   padding: "0.75rem",
//                   fontWeight: "bold",
//                   margin: "1rem"
//                 }}
//               >
//                 Community Showcases
//               </NavLink>
//             </div>
//             <NavLink
//               className='navbar-dropdown__nav__item'
//               to={`/users/${sessionUser}`}
//               exact={true}
//               activeClassName='active'
//             >
//               My Profile
//             </NavLink>
//             {/* <div>
//               <NavLink
//                 to="/my_resources"
//                 exact={true}
//                 activeClassName="active"
//                 className="button"
//                 css={{
//                   textDecoration: "none",
//                   color: "black",
//                   padding: "0.75rem",
//                   fontWeight: "bold",
//                   margin: "1rem"
//                 }}
//               >
//                 My Resources
//               </NavLink>
//             </div> */}
//             <div>
//               <LogoutButton setAuthenticated={setAuthenticated} />
//             </div>
//           </div>
//         )}
//         {!authenticated && (
//           <div
//             // className="right__nav__flex"
//             // css={{
//             //   display: "flex",
//             //   alignItems: "center",
//             //   marginTop: "-2rem",
//             //   padding: "0.5rem",
//             //   textDecoration: "none",
//             //   fontSize: "1rem",
//             // }}
//           >
//             <div>
//             </div>
//             <div>
//               <NavLink
//                 to="/login"
//                 exact={true}
//                 activeClassName="active"
//                 className="button"
//                 css={{
//                   textDecoration: "none",
//                   color: "black",
//                   padding: "0.75rem",
//                   fontWeight: "bold",
//                   margin: "1rem"
//                 }}
//               >
//                 Login
//               </NavLink>
//             </div>
//             <div style={{marginTop:"0rem"}} >
//               <NavLink
//                 to="/sign-up"
//                 exact={true}
//                 activeClassName="active"
//               >
//                 Sign Up
//               </NavLink>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

export default NavBar;

