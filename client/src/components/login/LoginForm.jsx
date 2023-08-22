import { useState } from 'react';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import Button from '../button/Button';
import Input from '../input/Input';
import Error from '../error/Error';
import './LoginForm.css';

function LoginForm() {
  const { login, error } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    login(username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <div className='p-5 max-h-min'>
      <div className='mb-5'>
        <div className='text-center'>
          <h1 className='mb-3 text-purple'>Log In</h1>
          <p className='text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            sunt enim eligendi eos blanditiis libero voluptate pariatur?
          </p>
        </div>
      </div>
      <div>
        <form className='grid grid-cols-4 grid-rows-3' onSubmit={handleSubmit}>
          <Input
            medium
            type='text'
            placeholder='Username'
            className='w-3/4 row-start-1 col-span-4 place-self-center '
            value={username}
            onChange={handleUsernameChange}
          />
          <Input
            medium
            type='text'
            placeholder='Password'
            className='w-3/4 row-start-2 col-span-4 place-self-center'
            value={password}
            onChange={handlePasswordChange}
          />
          <div className='flex h-min row-start-3 col-start-2 col-span-2 justify-center'>
            <Button type='submit' primary rounded className='mr-3'>
              Sign In
            </Button>
            <Button danger rounded>
              <Link to='/'>Cancel</Link>
            </Button>
          </div>
        </form>
      </div>
      <div>{error && <Error error={error} />}</div>
    </div>
  );
}

export default LoginForm;
