import React from 'react';
import CenterCard from '../centerCard/centerCard';
// import logo from "react-app/src/images/CollabHERativelogo2.svg"
import LoginForm from "../LoginFormModal"
import "../navbar.css"
import RightNav from '../rightNav/rightNav';


const SplashPage = ({setAuthenticated}) => {
    return (
      <CenterCard>
        <div>
            <h1>About [CollabHERative]</h1>
          {/* <LoginForm setAuthenticated={setAuthenticated}/> */}
        </div>
        </CenterCard>
        
    );
}

export default SplashPage