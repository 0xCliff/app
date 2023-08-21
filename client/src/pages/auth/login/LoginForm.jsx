import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import './LoginForm.css';

function LoginForm() {
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
        <form className='flex-row'>
          <Input medium type='text' placeholder='Username' className='w-full' />
          <Input medium type='text' placeholder='Password' className='w-full' />
          <div className='flex w-full justify-center'>
            <Button primary rounded className='mr-3'>
              Sign In
            </Button>
            <Button danger rounded>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
