import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

const withAuthRedirect = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const role = useSelector((state) => state.auth.role);

    useEffect(() => {
      if (!isAuthenticated) {
        // Redirect to the signin page
        navigate('/signin', { replace: true });
      } else {
        // Logic for redirection based on role and current route
        const currentPath = location.pathname;

        if (role === 'client' && !currentPath.startsWith('/client')) {
          // If client, redirect to client-specific route
          navigate('/client/home', { replace: true });
        } else if (role === 'freelancer' && !currentPath.startsWith('/freelancer')) {
          // If freelancer, redirect to freelancer-specific route
          navigate('/freelancer/home', { replace: true });
        }
      }
    }, [isAuthenticated, role, navigate, location]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuthRedirect;
