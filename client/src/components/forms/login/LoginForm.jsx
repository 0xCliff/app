import './LoginForm.css';

import BtnSuccess from '../../buttons/btn-success/BtnSuccess';
import BtnDanger from '../../buttons/btn-danger/BtnDanger';

function LoginForm() {
  return (
    <div className='form'>
      <div className='form-group'>
        <div className="text">
          <h1>Log In</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sunt enim eligendi eos blanditiis libero voluptate pariatur? Nihil dolores eligendi error architecto quo sit, ad sed tempore laudantium fuga in!</p>
        </div>
        <input placeholder="Username" type='text' className='user'/>
        <input placeholder="Password" type='text' className='pass' />
        <div className='btns'>
          <BtnSuccess text='Join' />
          <BtnDanger text='Cancel' />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
