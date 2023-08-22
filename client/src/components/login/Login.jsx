import Layout from '../../pages/layout/Layout';
import LoginForm from './LoginForm';
import './Login.css';

function Login() {
  return (
    <Layout>
      <div className='grid grid-cols-10 grid-rows-2 min-h-[60vh]'>
        <div className='place-self-center col-start-4 col-span-4 row-span-2 bg-dark-slate rounded-3xl p-3 w-5/6'>
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
}

export default Login;
