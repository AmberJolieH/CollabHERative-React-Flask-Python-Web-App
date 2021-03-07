import React, { useState } from "react";
import {Link, Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';
import { useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session"

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  // const [githuburl, setGithuburl] = useState("")


  const dispatch = useDispatch();
  
  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await dispatch(sessionActions.signUp(username, firstname, lastname, email, password));
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const updateLastname = (e) => {
    setLastname(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            onChange={updateFirstname}
            value={firstname}
          ></input>
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            onChange={updateLastname}
            value={lastname}
          ></input>
        </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password:</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
        
      </div>
       {/* <div>
        <label>Github url:</label>
        <input
          type="text"
          name="githuburl"
          onChange={updateGithuburl}
          value={repeatPassword}
          required={true}
        ></input>
      </div> */}
      <button type="submit">Sign Up</button>
        <p style={{ marginLeft: "3rem" }}>
          Already have an account?
        </p>
      <Link to="/login"
            className="text-button"
            style={{
              textDecoration: "none",
              color: "black",
              padding: "0.75rem",
              fontWeight: "bold",
              margin: "1rem",
              backgroundColor: "rgb(237, 237, 237)",
              marginLeft: "3.5rem"
            }}
          >
            Login
              </Link>
    </form>
  );
};

export default SignUpForm;
