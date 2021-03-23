import React, { useState, useEffect} from 'react';
import CenterCard from '../centerCard/centerCard';
// import logo from "react-app/src/images/CollabHERativelogo2.svg"
import LoginForm from "../LoginFormModal"
import "../topNav/navbar.css"
import RightNav from '../rightNav/rightNav';
import { useParams, useHistory } from "react-router-dom";


const SplashPage = ({setAuthenticated}) => {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const history = useHistory();
  useEffect(() => {
    if (!userId) {
      return
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      console.log(user);
      setUser(user);
    })();
  }, [userId]);
    return (
      <CenterCard>
        <div style={{marginLeft:"5rem"}}>
           
           <div style={{marginTop:"2rem"}} >
            <img src="https://collabherative.s3.us-east-2.amazonaws.com/logo_round-3.png" style={{width:"40%"}}/>
        </div>
        <div>
        <h1>
          Demo User
        </h1>
       </div>
        <div>
          <h2>
          Software Engineer
          </h2>
        </div>
        <div>
          <h3>
          Skills: 
          </h3>
        </div>
        <div>
          <text style={{fontSize:"12px"}}>
            <bold>Languages:</bold> Javascript, C, Typescript,Python, HTML, CSS,
            Databases: SQL, PostgreSQL,MongoDB, SQLAlchemy
            Frameworks: React,Redux,SLS(C##),Docker,Node.JS & Express.JS
            Operating Systems: MacOSX, Windows
            Collaboration Tools: Git, Slack
            Creative Tools: AutoCad, Maya, 3Ds Max, Blendr, Adobe Illustrator, Figma
          </text>
          
        </div>
        </div>
        </CenterCard>
        
    );
}

export default SplashPage