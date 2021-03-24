//* APP SETUP
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {useDispatch} from "react-redux";
import io from "socket.io-client";


//* COMPONENTS 
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import CreateShowcase from "./components/showcase/createShowcase";
import UsersList from "./components/UsersList";
import User from "./components/User";
import ListShowcases from "./components/showcase/ListShowcases"
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NavBar from "./components/topNav/NavBar";
import SplashPage from "./components/splashPage/splashPage"
import UserProfile from "./components/userProfile/userProfile"
import Chat from './components/chat'
import SideNav from "./components/SideNav/SideNav"
import CenterCard from "./components/centerCard/centerCard";
import RightNav from "./components/rightNav/rightNav"

//* STORE/SESSION/AUTH
import { restoreUser } from "./store/session";
import {chat} from "./store/chat"


//* SOCKETIO SETUP
  // endpoint variable 
  let endPoint = "http://localhost:5000"
  // connect with server using socket.io
  let socket = io.connect(`${endPoint}`)



  
  // TODO:
  // //all projects
  // //create a project 
  // //all users 
  // //messages backend 
  // // messeges component
  // myprofile -> new component -> update backend
  // update my profile -> new form / component
  // fix side nav 

function App() {
  const dispatch = useDispatch()
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  // const sessionUser = useSelector((state) => state.session.user);
  useEffect(() => {
    (async() => {
      const user = await dispatch(restoreUser());
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);



//* SOCKETIO 
// state hooks
const [messages, setMessages] = useState([
  "Hello and Welcome"]);
const [message, setMessage] = useState("");
  
// this method will call when first time app render and..
// every time message length changes
const getMessages = () => {
  socket.on('message', msg => {
    setMessages([...messages, msg.msg.message]);
  });
};

// componentDidUpdate method as hook (useEffect)
// this will auto call when message lenght changes
useEffect(()=>{
  getMessages();
},[messages.length]);



// on change input field this will call 
const onChange = e =>{
  setMessage(e.target.value);
};

//when send button pressed this method called 
const onClick = () => {
  if (message !== "") {
    // when button clicked emit the message to server
    socket.emit("message", JSON.stringify({message, senderid:2, recieverid:3 }));
    setMessage("");
  } else {
    alert("Please Add A Message")
    }
  };
  if (!loaded) {
    return null;
  }
  // return the view 
  



  return (
    <div className="wrapper">
    <BrowserRouter>
    <div className="a">
      <NavBar
            setAuthenticated={setAuthenticated}
            authenticated={authenticated}
          />
          </div>
          <div className="d">
            <RightNav
            setAuthenticated={setAuthenticated}
            authenticated={authenticated}/>
            <ProtectedRoute
              path="/create_showcase"
              exact={true}
              authenticated={authenticated}
            >
              <CreateShowcase/>
            </ProtectedRoute>
            <Route path="/" exact={true} authenticated={authenticated}>
         <RightNav setAuthenticated={setAuthenticated} authenticated={authenticated}>
          {/* <img src="https://collabherative.s3.us-east-2.amazonaws.com/logo_round-2.png" style={{width:"38%", padding:"1rem", boxSizing:"border-box", borderRadius:"2rem"}} /> */}
          {/* <h1 style={{padding:"1rem", boxSizing:"border-box", borderRadius:"2rem", fontSize:"15px"}}>Building a Community for women in tech to network and succeed!</h1> */}
         <div>
        {/* display each and every message in the state as a for loop */}
        {messages.length > 0 && messages.map(msg=> (
          <div>
            <p>
              {msg}
            </p>
          </div>
        ))}
        {/* input field */}
        <input value={message} name="message" onChange={e => onChange(e)}/>
        {/* button */}
        <button onClick={() => onClick()}>Send Message</button>
      </div>
         </RightNav>
         
        </Route>
          </div>
        <div className="b">
          {/* <CenterCard/> */}
      
       
      <Switch>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList/>
        </ProtectedRoute>
       

        <ProtectedRoute ProtectedRoute
          path='/chat'
          exact={true}
          authenticated={authenticated}>
          <Chat/>
        </ProtectedRoute>
        <ProtectedRoute
              path="/create_showcase"
              exact={true}
              authenticated={authenticated}
            >
              <CenterCard/>
            </ProtectedRoute>
            <ProtectedRoute
              path="/all_showcases"
              exact={true}
              authenticated={authenticated}
            >
              <ListShowcases/>
            </ProtectedRoute>
        <ProtectedRoute path="/users/:userId"  authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        <Route path="/login" exact={true} authenticated={authenticated}>
          <SplashPage setAuthenticated={setAuthenticated}/>
        </Route>
        <Route path="/" exact={true} authenticated={authenticated}>
         <SplashPage setAuthenticated={setAuthenticated} authenticated={authenticated}/>
         
        </Route>
      </Switch>
       </div>
      <div className="c">
      <SideNav></SideNav>
      
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
