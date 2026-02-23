import React, { useEffect, useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const toastShown = useRef(false);

  // Check user in localStorage
  const user = localStorage.getItem("userInfo");
  const isLoggedIn = user && JSON.parse(user)?._id; // ensures valid user object

  useEffect(() => {
    if (!isLoggedIn && !toastShown.current) {
      toast.error("Please login first");
      toastShown.current = true;
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
};

export default ProtectedRoute;
