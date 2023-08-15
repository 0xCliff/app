import Layout from '../../components/layout/Layout';
import LoginForm from '../../components/forms/login/LoginForm';
import './Login.css';

function Login() {
  return (
    <Layout>
      <div className='container'>
        <LoginForm />
      </div>
    </Layout>
  );
}

export default Login;
