import React from "react";
import FormRegister from "../Fragment/FormRegister";
import AuthLayout from "../Layout/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
