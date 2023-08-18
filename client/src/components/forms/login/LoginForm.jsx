import './LoginForm.css';

function LoginForm() {
  return (
    <div className='form'>
      <div className='form-group'>
        <div className='text'>
          <h1>Log In</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            sunt enim eligendi eos blanditiis libero voluptate pariatur? Nihil
            dolores eligendi error architecto quo sit, ad sed tempore laudantium
            fuga in!
          </p>
        </div>
        <form>
          <input placeholder='Username' type='text' className='user' />
          <input placeholder='Password' type='text' className='pass' />
          <div className='btns'>
            <button>Join</button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
