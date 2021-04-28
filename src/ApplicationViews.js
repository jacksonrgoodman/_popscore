import React from "react" 
import { Route,Redirect } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";

import { UserProfile } from "./components/profiles/UserProfile"

export const ApplicationViews = ({ isAuthenticated,setAuthUser}) => {

    return (
        <>
            <Route path="/login">
	          <Login setAuthUser={setAuthUser}/>
            </Route>
            <Route path="/register">
	          <Register setAuthUser={setAuthUser}/>
            </Route>
            <Route path="/">
	          {isAuthenticated ? 
              <UserProfile />
              :
              <Login setAuthUser={setAuthUser}/>
              }
            </Route>
            <Route path="/meetups">
	          
            </Route>
            <Route path="/register"> 
            </Route>
        </>
    )
}
