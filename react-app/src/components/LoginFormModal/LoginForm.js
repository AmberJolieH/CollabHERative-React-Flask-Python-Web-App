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
    <div className="login-card" style={{padding:"1rem"}}>
    <form onSubmit={onLogin} style={{alignItems:"center"}} >
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div >
      {/* <div style={{width:"5%"}}>
        <img src="https://collabherative.s3.us-east-2.amazonaws.com/logo_round-5.png"/>
      </div> */}
      <div>
       <img src="https://collabherative.s3.us-east-2.amazonaws.com/logo_round-5.png" style={{display:"flex", alignItems:"center", marginLeft:"4rem", width:"75%"}}/>
       </div>
      <div >
        <label  style={{marginRight:"1rem"}}htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
          style={{
            borderRadius:"10px"
          }}
        />
      </div>
      <div >
        <label style={{marginRight:"1rem"}} htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
           style={{
            borderRadius:"10px"
          }}
        />
        </div>
        <button className='signupButton' type="submit" style={{backgroundColor:"#f55645", marginTop:"1rem"}}>Login</button>
    
        <div style={{display:"flex", justifyContent:"center"}} >
        <button onClick={demoLogin} className='signupButton'type='button'style={{backgroundColor:"#feb9c1", marginTop:".5rem"}}>Demo</button>
      </div>
      </form>
    </div>
    </>
    
  );
};

export default LoginForm;
