import './index.css'

function MessageInfo({ message, type }) {
  return (
    <p className={`MessageInfo${type ? ` MessageInfo--${type}` : ''}`}>{message}</p>
  );
}

export { MessageInfo }
