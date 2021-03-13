//* APP SETUP
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
//* STORE/SESSION/AUTH
import { authenticate } from "./services/auth";
import SideNav from "./components/SideNav/SideNav"
import CenterCard from "./components/centerCard/centerCard";


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  // const sessionUser = useSelector((state) => state.session.user);
  useEffect(() => {
    (async() => {
      const user = await authenticate();
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
          <CenterCard/>
        </div>
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
              <CreateShowcase/>
            </ProtectedRoute>
            <ProtectedRoute
              path="/all_showcases"
              exact={true}
              authenticated={authenticated}
            >
              {/* <ListShowcases/> */}
            </ProtectedRoute>
        <ProtectedRoute path="/users/:userId"  authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        <Route path="/" exact={true} authenticated={authenticated}>
         <SplashPage setAuthenticated={setAuthenticated}/>
         
        </Route>
      </Switch>
      <div className="c">
      <SideNav></SideNav>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
