import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        navigate("/home");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <button
          type="button"
          onClick={register}
          className="login__signInButton"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
            alt="Google logo"
            className="google-logo"
          />
          Sign In with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
