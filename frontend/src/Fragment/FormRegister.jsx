import React from "react";
import InputForm from "../Element/Input";
import Button from "../Element/Button";

const FormRegister = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    localStorage.setItem("username", event.target.username.value);
    localStorage.setItem("email", event.target.username.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/login";
  };
  return (
    <form onSubmit={handleRegister}>
      <InputForm
        name="username"
        label="Username"
        type="text"
        placeholder="Enter your username"
      />
      <InputForm
        name="email"
        label="Email"
        type="email"
        placeholder="Enter your Email"
      />
      <InputForm
        name="password"
        label="Password"
        type="password"
        placeholder="*****"
      />
      <Button classname="bg-slate-800" type="submit">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
