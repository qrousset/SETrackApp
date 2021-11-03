import React from "react";
import SigninForm from "../components/SigninForm";

const Signin = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <SigninForm />
    </div>
  );
};

export default Signin;
