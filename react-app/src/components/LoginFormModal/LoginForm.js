import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import {useDispatch} from "react-redux"


const LoginForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login(email, password));
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login('demo@aa.io', 'password'));
    if (!user.errors) {
      setAuthenticated(true);
    }
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
    <div className="login-card" style={{padding:"4.2rem"}}>
    <form onSubmit={onLogin} style={{alignItems:"center"}} >
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
       <img src="https://collabherative.s3.us-east-2.amazonaws.com/login.svg" style={{display:"flex", alignItems:"center", marginLeft:"2rem"}}/>
      <div >
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div >
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        </div>
        <button className='signupButton' type="submit" style={{backgroundColor:"#f55645", marginTop:"1rem"}}>Login</button>
    
        <div style={{display:"flex", justifyContent:"center"}} >
        <button onClick={demoLogin} className='signupButton'type='button'style={{backgroundColor:"#feb9c1", marginTop:"1rem"}}>Demo</button>
      </div>
      </form>
    </div>
    </>
    
  );
};

export default LoginForm;
