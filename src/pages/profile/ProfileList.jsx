import React from "react";
import profileData from "./profileData";
import { Link, useLocation } from "react-router-dom";


function ProfileList() {
  const location = useLocation();
  console.log(location)

  const users = profileData.map(user => (
    <li key={user._id}>
      <Link to={`/users/${user._id}`}>
        {user.name}
      </Link>
    </li>
  ));

  return(
    <ul>
      {users}
    </ul>
  );
}

export default ProfileList;