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
      
      <li key={user.id}>
        <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
      </li>
    );
  });

  return (
    <CenterCard>
    <>
      <h1>User List: </h1>
      <ul>{userComponents}</ul>
    </>
    </CenterCard>
  );
  
}

export default UsersList;
