import { createContext, useState } from 'react';
import axios from 'axios';
import { CookiesProvider, useCookies } from 'react-cookie';

const AuthContext = createContext();

function Provider({ children }) {
  const [error, setError] = useState(null);
  const [cookies] = useCookies(['connect.sid']);

  const login = async user => {
    let result = await axios
      .post(
        'http://localhost:8080/api/login',
        { user },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(res => res)
      .catch(err => setError(err.response.data));

    if (result) {
      window.location.replace('/index');
    }
  };

  const logout = async () => {
    await axios
      .post(
        'http://localhost:8080/api/logout',
        {},
        {
          withCredentials: true,
        }
      )
      .then(window.location.replace('/'))
      .catch(err => setError(err));
  };

  const valueToShare = {
    login,
    error,
    setError,
    logout,
    cookies,
  };

  return (
    <CookiesProvider defaultSetCookies={{ path: '/' }}>
      <AuthContext.Provider value={valueToShare}>
        {children}
      </AuthContext.Provider>
    </CookiesProvider>
  );
}

export { Provider };
export default AuthContext;
