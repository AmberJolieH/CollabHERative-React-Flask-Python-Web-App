 import React, {useState} from 'react'
 import ListShowcases from "../showcase/ListShowcases"
 import logo from "../../images/logoNew.svg"

 const CenterCard=({ setAuthenticated, authenticated, children }) =>{
     return (
         <div className="centerNav">
           {/* <img src={logo} alt="React Logo"/>
           <ListShowcases setAuthenticated={setAuthenticated}/> */}
           {children}
        </div>
     )
};

export default CenterCard