import React from "react";
import FormLogin from "../Fragment/FormLogin";
import AuthLayout from "../Layout/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
