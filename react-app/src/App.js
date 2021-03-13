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

  return (
    <BrowserRouter>
   
      <NavBar
            setAuthenticated={setAuthenticated}
            authenticated={authenticated}
          />
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
         <SideNav></SideNav>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
