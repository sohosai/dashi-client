import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();
  const handleClick = () => {
    window.localStorage.clear();
    logout({ logoutParams: { returnTo: window.location.origin } });
  };
  return <button onClick={handleClick}>ログアウト</button>;
};

export default LogoutButton;
