import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
import {remoteURL} from "../../modules/tools"
import "./Login.css"

export const Register = ({setAuthUser}) => {
    const userName = useRef()
    const name = useRef()
    const email = useRef()
    const bio = useRef()
    const conflictDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`${remoteURL}/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch(`${remoteURL}/users`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: name.current.value,
                            userName: userName.current.value,
                            email: email.current.value,
                            bio: bio.current.value,
                            isAdmin: false
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                setAuthUser(createdUser)
                                history.push("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
        
    }

    return (
        <main style={{ textAlign: "center" }}>

            {/* <dialog className="dialog dialog-password" ref={conflictDialog}>
                <h2 className=".dialog-message">An Account With That Email Address Already Exists</h2>
                <button className="button-close" onClick={e => conflictDialog.current.close()}>CLOSE</button>
            </dialog> */}

            <form className="form-login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Sign Up to 🍿_popscore</h1>
                <fieldset>
                    <label htmlFor="userName"> User Name: </label>
                    <input ref={userName} type="text" name="userName" className="register-input userName" placeholder="User Name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="name"> Nick Name: </label>
                    <input ref={name} type="text" name="name" className="register-input" placeholder="Preferred Name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address: </label>
                    <input ref={email} type="email" name="email" className="register-input" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="bio"> Bio: </label>
                    <input ref={bio} type="bio" name="bio" className="register-input" placeholder="Tell Us About Yourself" required />
                </fieldset>
                <fieldset>
                    <button className="button-close" type="submit"> Register! </button>
                </fieldset>
            </form>
        </main>
    )
}
