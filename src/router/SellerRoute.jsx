import React from "react";
import useAuth from "../Context/useAuth/useAuth";
import useRole from "../hooks/useRole";
import { Link } from "react-router";

const SellerRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, isLoading } = useRole();

  if (loading || isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-blue-600"></span>
      </div>
    );
  }

  if (role?.role !== "seller") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-primary text-3xl font-bold mb-4">
            Access Denied
          </h2>
          <p className="text-xl mt-4">
            You do not have permission to view this page.
          </p>
          <p className="text-xl mt-2">
            Please check your credentials and try again.
          </p>
          <div className="flex items-center gap-2 mt-6 justify-center">
            <Link
              to="/"
              className="btn text-center text-white bg-primary/90 hover:bg-primary"
            >
              Go to Home
            </Link>
            <Link
              to="/dashboard"
              className="btn text-center text-primary hover:text-white border border-primary hover:bg-primary"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return children;
};

export default SellerRoute;
