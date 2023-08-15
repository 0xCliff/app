import './BtnDanger.css';

function BtnDanger({ text, route }) {
  return <a className="btn-danger" href={route}>{text}</a>;
}

export default BtnDanger;
