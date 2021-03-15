import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CenterCard from "./centerCard/centerCard";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    return (
     
      <li  style={{listStyle:'none'}} key={user.id}>
        <NavLink  style={{width:"8%", height:"8%", textDecoration:"none", color:"#3D3D3D"}} to={`/users/${user.id}`}>
          <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", marginLeft:"5rem"}}>
          <img style={{width:"30%"}} src={user.imgurl}/>
          <h2  style={{textDecoration:"none"}}>{user.firstname}</h2>
          </div>
          </NavLink>
      </li>
      
    );
  });

  return (
    <CenterCard>
    <>
      <h1 style={{marginLeft:"2rem"}}>Our Community: </h1>
      <ul style={{display:"flex", flexWrap:"wrap", flexDirection:"row"}}>{userComponents}</ul>
    </>
    </CenterCard>
  );
  
}

export default UsersList;
