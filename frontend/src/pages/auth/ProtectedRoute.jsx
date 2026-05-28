import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  children,
  allowedRole,
}) => {

  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  const role =
    localStorage.getItem("role");

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/unauthorized"
        state={{
          reason: "not-logged-in",
        }}
        replace
      />
    );
  }

  if (
    allowedRole &&
    role !== allowedRole
  ) {
    return (
      <Navigate
        to="/unauthorized"
        state={{
          reason: "wrong-role",
          role,
        }}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;