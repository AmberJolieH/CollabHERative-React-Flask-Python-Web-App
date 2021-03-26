 import React, {useState} from 'react'


 const AboutMeCard=({ setAuthenticated, authenticated, children }) =>{
     return (
         <div className="amberCard">
           {/* <img src={logo} alt="React Logo"/>
           <ListShowcases setAuthenticated={setAuthenticated}/> */}
           {children}
        </div>
     )
};

export default AboutMeCard