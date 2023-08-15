import './BtnSuccess.css';

function BtnSuccess({ text, route }) {
  return <a className="btn-success" href={route}>{text}</a>;
}

export default BtnSuccess;
