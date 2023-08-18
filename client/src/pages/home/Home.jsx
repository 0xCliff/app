import { useEffect, useState, useContext } from 'react';

import Layout from '../../components/layout/Layout';
import AuthContext from '../../context/authContext';

function Home() {
  const { isLoggedIn } = useContext(AuthContext);
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/users', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <Layout>
      {isLoggedIn &&
        users?.map((user) => {
          return (
            <table key={user.id}>
              <th>{user.name}</th>
              <th>- {user.email}</th>
              <th>- {user.password}</th>
            </table>
          );
        })}
    </Layout>
  );
}

export default Home;
