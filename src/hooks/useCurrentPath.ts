import { matchRoutes, useLocation } from 'react-router-dom';

const routes = [{ path: '/members/:id' }];

const useCurrentPath = () => {
  const location = useLocation();

  return location.pathname;
};

export default useCurrentPath;
