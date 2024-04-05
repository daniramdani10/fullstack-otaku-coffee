import React from "react";
import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold text-slate-800">{title}</h1>
        <p className="text-slate-700 font-bold text-lg mb-3">
          Enter your credentials
        </p>
        {children}
        <p className="text-slate-700 text-sm flex items-center justify-center mt-5">
          {type === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          {type === "login" ? (
            <Link to="/register" className="text-blue-600 ml-1 font-bold">
              Register
            </Link>
          ) : (
            <Link to="/login" className="text-blue-600 ml-1 font-bold">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
