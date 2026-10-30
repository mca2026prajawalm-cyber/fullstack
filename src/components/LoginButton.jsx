
import React from "react";

function LoginButton() {
  const handleLogin = () => {
    alert("Login button clicked!");
  };

  return (
    <button
      className="login-button"
      onClick={handleLogin}
    >
      Log In
    </button>
  );
}

export default LoginButton;

