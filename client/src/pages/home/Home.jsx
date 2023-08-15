import { useEffect, useState } from 'react';

import Layout from '../../components/layout/Layout';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
