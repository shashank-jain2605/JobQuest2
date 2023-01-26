import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();
  console.log(user);

  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
