import React from 'react'


const RightNav=({children}) =>{
    return(
        <div className="rightNav">
         {/* {!authenticated && (
         <LoginForm setAuthenticated={setAuthenticated}/>
         )} */}
         {children}
       </div>
    )
}

export default RightNav;