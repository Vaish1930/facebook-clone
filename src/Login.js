import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
// import firebase from "./firebase";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    //Sign In
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"
          alt=""
        />
        <img
          src="http://www.pngmart.com/files/3/Facebook-Logo-PNG-Pic.png"
          alt=""
        />
      </div>

      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
