import React from "react";

const Login = ({ handleToggleForm }) => {
  return (
    <div>
      <div>login</div>
      <button onClick={() => handleToggleForm("signup")}>
        Dont't have an account! Sign Up Here
      </button>
    </div>
  );
};

export default Login;
