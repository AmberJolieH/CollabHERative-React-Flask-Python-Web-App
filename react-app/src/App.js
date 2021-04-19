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
import SecondChatCard from "./components/chat/secondChatCard";
import right from "./images/right.svg"
import projectExample from "./images/jobs2.svg"
import jobs from "./images/jobs.svg"
import AboutGallery from "./components/amber/aboutGallery"

//* STORE/SESSION/AUTH
import { restoreUser } from "./store/session";
import {chat} from "./store/chat"
import About from "./components/amber/about";


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
  // //fix side nav 
  // //correct top nav space
  //// make json seed data ->> senderid, receiverid, sample messege, is a recuritor?
  
  //update my profile - style add content
  // make seed data projects with photos
  // my job postings page
  // projects example on create a project
  // click on individual project and see details 
  // heroku updated 4/19/21


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
            {/* <RightNav
            setAuthenticated={setAuthenticated}
            authenticated={authenticated}/> */}
            <ProtectedRoute
              path="/create_showcase"
              exact={true}
              authenticated={authenticated}
            >
              <CreateShowcase/>
              
            </ProtectedRoute>
            <ProtectedRoute
              path="/all_showcases"
              exact={true}
              authenticated={authenticated}
            >
              <About/>
              
            </ProtectedRoute>
            <ProtectedRoute
              path='/chat'
              exact={true}
              authenticated={authenticated}>
          <SecondChatCard/>
        </ProtectedRoute>
            <Route path="/" exact={true} authenticated={authenticated}>
         <RightNav setAuthenticated={setAuthenticated} authenticated={authenticated}>
          <img src={right}/>
         </RightNav>
        </Route>

         <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <RightNav>
            <img src={jobs}/>
          </RightNav>
          
          
        </ProtectedRoute>
          </div>
        <div className="b">
      <Switch>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList/>
          
        </ProtectedRoute>
       

        <ProtectedRoute
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
              <CenterCard> <img src={projectExample}/></CenterCard>
        </ProtectedRoute>
        <ProtectedRoute
              path="/all_showcases"
              exact={true}
              authenticated={authenticated}
            >
              <AboutGallery/>
              {/* <ListShowcases/> */}
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
