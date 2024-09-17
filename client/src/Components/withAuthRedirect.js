// withAuthRedirect.js
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const withAuthRedirect = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const role = useSelector((state) => state.auth.role);

    useEffect(() => {
      if (!isAuthenticated) {
        navigate('/signin');
      } else {
        if (role === 'client') {
          navigate('/client/home');
        } else if (role === 'freelancer') {
          navigate('/freelancer/home');
        }
      }
    }, [isAuthenticated, role, navigate]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuthRedirect;
