import React from "react";

const SignUp = ({ handleToggleForm }) => {
  return (
    <div>
      <div>SignUp Page</div>
      <button onClick={() => handleToggleForm("login")}>
        Already have an account! Log In Here
      </button>
    </div>
  );
};

export default SignUp;
