import { useState } from 'react';

import useAuthContext from '../../hooks/useAuth';
import Button from '../button/Button';
import Input from '../input/Input';
import Error from '../error/Error';
import './LoginForm.css';

function LoginForm({ onClose }) {
  const { login, error } = useAuthContext();
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

    const user = {
      username,
      password,
    };

    login(user);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
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
        <form
          className='flex flex-col w-full items-center'
          onSubmit={handleSubmit}
        >
          <Input
            medium
            type='text'
            placeholder='Username'
            className='w-3/4'
            value={username}
            onChange={handleUsernameChange}
          />
          <Input
            medium
            type='text'
            placeholder='Password'
            className='w-3/4'
            value={password}
            onChange={handlePasswordChange}
          />
          <div className='flex w-full justify-center mb-5'>
            <Button type='submit' primary rounded className='mr-3'>
              Sign In
            </Button>
            <Button danger rounded onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
      <div>{error && <Error error={error} />}</div>
    </div>
  );
}

export default LoginForm;
