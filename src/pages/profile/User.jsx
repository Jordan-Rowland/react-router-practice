import React from "react";
import { useParams, useHistory } from "react-router-dom";
import profileData from "./profileData";


function User(props) {
  const params = useParams()
  const history = useHistory()
  const currentUser = profileData.find((user) => user._id === params.userId)

  function handleClick() {
    console.log("Going back....")
    setTimeout(() => {
      history.push("/users")
    }, 400)
  }

  return(
    <div>
      This is the page for {currentUser.name}
      <button onClick={handleClick}>Back to users</button>
    </div>
  );
}

export default User;