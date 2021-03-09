import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as showcaseActions from "./../store/showcase"

function User() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  // Notice we use useParams here instead of getting the params
  // From props.
 
  // const user = useSelector((state) => state.users[userId]);
  
  const usershowcases = showcase.filter((showcase) => showcase.userId === user.id);
  const showcase = useSelector((state)=> state.showcases)
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
      setUser(user);
    })();
  }, [userId]);

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
          {usershowcases.map((projects)=> {
              const {title, description, techCategoryId, id} = projects;
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
                              <h3>Area of profession:{techCategoryId}</h3>

                              
                          </div>
                    {/* image here */}
                  </div>
              )
          })}
      </div>
    </div>
  )}
export default User;
