import React from "react" 
import { Route,Redirect } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";

import { UserProfile } from "./components/profiles/UserProfile"
import { ProfileList } from "./components/profiles/ProfileList"

import { UserList } from "./components/lists/UserList"
import { MyLists } from "./components/lists/MyLists"
import { ListList } from "./components/lists/ListList"
import { ListForm } from "./components/lists/AddList"
import { ListEditForm } from "./components/lists/EditList"

import { UserMeetup } from "./components/meetups/UserMeetup"
import { MyMeetups } from "./components/meetups/MyMeetups"
import { MeetupList } from "./components/meetups/MeetupList"
import { MeetupForm } from "./components/meetups/AddMeetup"
import { MeetupEditForm } from "./components/meetups/EditMeetup"

export const ApplicationViews = ({ isAuthenticated,setAuthUser}) => {

    return (
        <>
            <Route path="/login">
	          <Login setAuthUser={setAuthUser}/>
            </Route>
            <Route exact path="/register">
	          <Register setAuthUser={setAuthUser}/>
            </Route>
            <Route exact path="/">
	          {isAuthenticated ? 
              <>
                <UserProfile setAuthUser={setAuthUser}/>
                <UserList setAuthUser={setAuthUser}/>
                <UserMeetup setAuthUser={setAuthUser}/>
              </>
              :
              <Login setAuthUser={setAuthUser}/>
              }
            </Route>

            <Route exact path="/meetups/:meetupId(\d+)">
                {/* <MeetupDetail /> */}
            </Route>

            <Route path="/meetups/create">
                <MeetupForm />
            </Route>

            <Route path="/meetups/:meetupId(\d+)/edit">
                <MeetupEditForm />
            </Route>

            <Route exact path="/meetups">
              <MeetupList setAuthUser={setAuthUser}/>
            </Route>
            <Route exact path="/mymeetups">
              <MyMeetups setAuthUser={setAuthUser}/>
            </Route>

            <Route path="/lists/:listId(\d+)">
                {/* <ListDetail /> */}
            </Route>

            <Route path="/lists/create">
                <ListForm />
            </Route>

            <Route path="/lists/:listId(\d+)/edit">
                <ListEditForm />
            </Route>

            <Route exact path="/lists">
              <ListList setAuthUser={setAuthUser}/>
            </Route>
            <Route exact path="/mylists">
              <MyLists setAuthUser={setAuthUser}/>
            </Route>
            <Route exact path="/profiles">
              <ProfileList setAuthUser={setAuthUser}/> 
            </Route>
        </>
    )
}
