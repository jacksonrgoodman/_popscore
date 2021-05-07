import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import {remoteURL} from "../../modules/tools"
import "./Login.css"


export const Login = ({setAuthUser}) => {
    const email = useRef()
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`${remoteURL}/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    setAuthUser(exists)
                    history.push("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container-login">
            <dialog className="dialog dialog-auth" ref={existDialog}>
                <h2 className="dialog dialog-message">You're Not In Our Database!</h2>
                <button className="button-close" onClick={e => existDialog.current.close()}>CLOSE</button>
            </dialog>

            <section className="login-bubble">
                <form className="form-login" onSubmit={handleLogin}>
                    <img className="peep-login" src={require('../../images/peep-sitting-5.svg').default} />
                    <div className="user-interface">
                        <img className="logo-login" src={require('./logo_popscore_login.png').default} />
                        <h2 className="sign-in">Sign In Here!</h2>
                        <fieldset className="input-email">
                            <label htmlFor="inputEmail"> Email: </label>
                            <input ref={email} type="email"
                                id="email"
                                className="form-control"
                                placeholder="Email address"
                                required autoFocus />
                        </fieldset>
                        <fieldset>
                            <button type="submit" className="log-in button-close">
                                Log in
                            </button>
                        </fieldset>
                    </div>
                </form>
            </section>
            <section className="link-register">
                <Link  to="/register"><button className="button-close">Register?</button></Link>
            </section>
        </main>
    )
}

