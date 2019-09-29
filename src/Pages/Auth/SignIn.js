import React, { useEffect, useState, useCallback } from "react";
import { withRouter } from "react-router";
import app from "./firebase.js";
import { async } from "q";

function SignIn({ history }) {
  const handleSignIn = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassowrd(email.value, password.value);
        history.push("/");
      } catch {
        alert("error");
      }
    },
    [history]
  );
  return(
      <div>
          
      </div>
  )
}
