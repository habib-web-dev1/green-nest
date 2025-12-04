import React, { useContext } from "react";

import { Navigate } from "react-router";
import { AuthContext } from "./AuthContext";

const PrivateRouter = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;
