import { IdToken, useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const Profile = () => {
  const { user, isAuthenticated, isLoading, getIdTokenClaims } = useAuth0();
  useEffect(() => {
    const fetchClaims = async () => {
      if (isAuthenticated) {
        const claims: IdToken | undefined = await getIdTokenClaims();
        localStorage.setItem('jwt', claims?.__raw || '');
      }
    };
    fetchClaims();
  }, [isAuthenticated]);

  return isLoading ? <div>Loading...</div> : isAuthenticated ? <p>name: {user?.name}</p> : <></>;
};

export default Profile;
