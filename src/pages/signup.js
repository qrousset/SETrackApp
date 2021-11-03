import React from "react";
import SignupForm from "../components/SignupForm";

const Signup = () => {
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
      <SignupForm />
    </div>
  );
};

export default Signup;
