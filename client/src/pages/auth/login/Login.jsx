import Layout from '../../layout/Layout';
import LoginForm from './LoginForm';
import './Login.css';

function Login() {
  return (
    <Layout>
      <div className='grid grid-cols-12 grid-rows-6'>
        <div className='p-3 h-[24rem] col-start-5 row-start-2 col-span-4 row-span-4 bg-dark-slate rounded-[2rem]'>
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
}

export default Login;
