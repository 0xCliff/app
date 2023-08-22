import { createContext, useState } from 'react';
import axios from 'axios';
import { CookiesProvider, useCookies } from 'react-cookie';

const AuthContext = createContext();
const URL = 'http://localhost:8080/login';

function Provider({ children }) {
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['sessionId']);

  const login = async (username, password) => {
    let result = await axios
      .post(
        URL,
        { username, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(res => res)
      .catch(err => setError(err.response.data));

    if (result) {
      setCookie('sessionId', result.data);
      window.location.replace('/index');
    }
  };

  const logout = () => {
    removeCookie('sessionId');
    window.location.replace('/');
  };

  const valueToShare = {
    login,
    error,
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
