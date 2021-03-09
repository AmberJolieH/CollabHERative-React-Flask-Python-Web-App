import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as showcaseActions from "./../store/showcase"

function User() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({});
  const [usershowcase,setUserShowcase] = useState();
  const { userId }  = useParams();
  const showcase = useSelector((state)=> state.showcases)
  // Notice we use useParams here instead of getting the params
  // From props.
 
  // const user = useSelector((state) => state.users[userId]);
  
  // const usershowcase = showcase.filter((showcase) => showcase.userId === user.id);
  

  useEffect(() => {
		dispatch(showcaseActions.listshowcases())
	},[dispatch])
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

useEffect(()=>{
if (showcase)setUserShowcase(Object.values(showcase).filter((showcase) => showcase.userId === user.id))
console.log(usershowcase)
},[user, showcase])

  if (!user) {
    return null;
  }

  return (
    <div>
    <ul>
      <a>
        <strong></strong> {user.username}
      </a>
    </ul>
    <div>
          {usershowcase && usershowcase.map((projects)=> {
              const {title, description, techcategory, id} = projects;
              return(
                  <div
                      key={id}
                      onClick={() => {
                          history.push(`/showcase/${id}`);
                      }}
                      >
                          <div>
                              <h3>{title}</h3>
                              <h3>{description}</h3>
                              <h3>Area of profession:{techcategory}</h3>

                              
                          </div>
                    {/* image here */}
                  </div>
              )
          })}
      </div>
    </div>
  )}
export default User;
