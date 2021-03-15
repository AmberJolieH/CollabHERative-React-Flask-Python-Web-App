//* APP SETUP
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {useDispatch} from "react-redux"

//* COMPONENTS 
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import CreateShowcase from "./components/showcase/createShowcase";
import UsersList from "./components/UsersList";
import User from "./components/User";
import ListShowcases from "./components/showcase/ListShowcases"
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NavBar from "./components/NavBar";
import SplashPage from "./components/splashPage/splashPage"
import UserProfile from "./components/userProfile/userProfile"

//* STORE/SESSION/AUTH
import { restoreUser } from "./store/session";
import SideNav from "./components/SideNav/SideNav"
import CenterCard from "./components/centerCard/centerCard";
import RightNav from "./components/rightNav/rightNav"

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

  if (!loaded) {
    return null;
  }

  // todo:
  // myprofile 
  // all projects
  //create a project 
  // all users 


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
          <img src="https://collabherative.s3.us-east-2.amazonaws.com/logo_round-2.png" style={{width:"100%", padding:"1rem", boxSizing:"border-box", borderRadius:"2rem"}} />
          <h1 style={{padding:"1rem", boxSizing:"border-box", borderRadius:"2rem"}}>Building a Community for women in tech to network and succeed!</h1>
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
