import { createContext, useState } from 'react';
import axios from 'axios';
import { CookiesProvider, useCookies } from 'react-cookie';

const AuthContext = createContext();

function Provider({ children }) {
  const [error, setError] = useState(null);
  const [cookies, getCookie] = useCookies(['user']);

  const login = async (username, password) => {
    let result = await axios
      .post(
        'http://localhost:8080/api/login',
        { username, password },
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

  console.log(cookies);
  const logout = async () => {
    const user = getCookie('user');
    await axios
      .post(
        'http://localhost:8080/api/logout',
        { user: user },
        { withCredentials: true }
      )
      .then(window.location.replace('/'))
      .catch(err => console.error(err));
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
