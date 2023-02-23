import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../contexts/auth/AuthContext';

const ProtectedPage = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to='/' />;
  }

  return children;
};

export default ProtectedPage;