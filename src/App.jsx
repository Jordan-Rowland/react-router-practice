import React from 'react';
import { Link, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Profile from "./pages/profile/Profile.jsx";
import ProfileList from "./pages/profile/ProfileList.jsx";
import User from "./pages/profile/User.jsx";


function App() {

  return (
    <>
    {/* Anything outside of the switch will stay present
    on the page even after routes switch */}
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      {/* This is also changed for route-matching
      <Link to="/profile">Profile</Link> */}

      <Link to="/account">Profile</Link>
      <Link to="/users">Users</Link>
    </header>

      {/* <Switch> */}
      {/* !! OLD WAY !! */}
        {/* <Route exact path="/" component={Home}/> */}
        {/* If the component has props, use a render method: */}
        {/* <Route
          path="/about"
          render={() =>
            <About name="Dave" />
          }/> */}
      {/* </Switch> */}

      {/* !! NEW WAY !! */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About name="Djavid" />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>

        {/* What happens if we want to change a route? profile -> account. import `useRouteMatch`
          in the original route page(profile)
        <Route path="/profile"> */}

        <Route path="/account">
            <Profile/>
        </Route>
        <Route exact path="/users">
          <ProfileList />
        </Route>
        <Route path="/users/:userId">
          <User />
        </Route>
      </Switch>
    </>
  );
}

export default App;
