//? 🍿_popscore
//* an app by Jackson Goodman[http://github.com/jacksonrgoodman]

import { NavBar } from "./components/nav/NavBar.js"
import { ApplicationViews } from "./ApplicationViews"
import "./Popscore.css"
import React, {useState} from "react";

export const Popscore = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("popscore_User") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("popscore_User", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("popscore_User") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("popscore_User") !== null)
      }

    return (
        <>
            <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
            <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated}/>
        </>
    )
}