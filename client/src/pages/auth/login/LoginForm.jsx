import { useForm } from 'react-hook-form';

import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import './LoginForm.css';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className='grid grid-cols-8 grid-rows-4'>
      <div className='row-start-1 row-span-1 col-start-1 col-span-8'>
        <div className='text-center'>
          <h1 className='mb-3 text-purple'>Log In</h1>
          <p className='text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            sunt enim eligendi eos blanditiis libero voluptate pariatur?
          </p>
        </div>
      </div>
      <div className='row-start-2 row-span-2 col-start-2 col-span-6 xl:items-center md:mt-5 justify-center flex'>
        <form className='flex-row' onSubmit={handleSubmit(onSubmit)}>
          <Input
            medium
            type='text'
            placeholder='Username'
            className='w-full'
            name='username'
            {...register('username', { required: true })}
          />
          <Input
            medium
            type='text'
            placeholder='Password'
            className='w-full'
            name='password'
            {...register('password', { required: true })}
          />
          <div className='flex w-full justify-center'>
            <Button type='submit' primary rounded className='mr-3'>
              Sign In
            </Button>
            <Button danger rounded>
              Cancel
            </Button>
          </div>
        </form>
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
    </div>
  );
}

export default LoginForm;
