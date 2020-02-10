import React from "react";
import { useParams } from "react-router-dom";
import profileData from "./profileData";


function User(props) {
  const params = useParams()
  const currentUser = profileData.find((user) => user._id === params.userId)

  return(
    <div>
      This is the page for {currentUser.name }
    </div>
  );
}

export default User;