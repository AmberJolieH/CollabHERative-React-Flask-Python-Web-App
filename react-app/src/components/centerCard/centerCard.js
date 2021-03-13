 import React, {useState} from 'react'
 import ListShowcases from "../showcase/ListShowcases"
 const CenterCard=({ setAuthenticated, authenticated }) =>{
     return (
         <div className="centerNav">
           <img src="https://collabherative.s3.us-east-2.amazonaws.com/login.svg" style={{display:"flex", alignItems:"center", marginLeft:"2rem"}}/>
           <ListShowcases setAuthenticated={setAuthenticated}/>
        </div>
     )
};

export default CenterCard