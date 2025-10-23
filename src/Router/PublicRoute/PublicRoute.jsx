import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const PublicRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
