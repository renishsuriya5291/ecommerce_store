import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const withAuthRedirect = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
    const role = useSelector((state) => state.auth?.user?.role);

    useEffect(() => {
      const currentPath = location.pathname;

      if (!isAuthenticated) {
        // If not authenticated and not already on the signin page, redirect to signin
        if (currentPath !== "/signin") {
          navigate("/signin", { replace: true });
        }
      } else {
        // Logic for redirection based on role and current route
        if (role === "client" && !currentPath.startsWith("/client")) {
          navigate("/client/home", { replace: true });
        } else if (
          role === "freelancer" &&
          !currentPath.startsWith("/freelancer")
        ) {
          navigate("/freelancer/home", { replace: true });
        }
      }
    }, [isAuthenticated, role, navigate, location]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuthRedirect;
