import { IdToken, useAuth0 } from '@auth0/auth0-react';
import { FC, useEffect } from 'react';

const LoginButton: FC = () => {
  const { isAuthenticated, getIdTokenClaims, loginWithRedirect } = useAuth0();
  // set jwt
  useEffect(() => {
    const fetchClaims = async () => {
      if (isAuthenticated) {
        const claims: IdToken | undefined = await getIdTokenClaims();
        localStorage.setItem('jwt', claims?.__raw || '');
      }
    };
    fetchClaims();
  }, [isAuthenticated]);
  return <button onClick={() => loginWithRedirect()}>ログイン</button>;
};

export default LoginButton;
