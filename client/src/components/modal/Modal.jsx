import { createPortal } from 'react-dom';
import { useEffect } from 'react';

function Modal({ children, onClose }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return createPortal(
    <div>
      <div
        onClick={onClose}
        className='fixed inset-0 bg-slate opacity-80'
      ></div>
      <div className='fixed inset-x-[45rem] inset-y-[17rem] p-10 bg-dark-slate rounded-2xl'>
        {children}
      </div>
    </div>,
    document.querySelector('.modal')
  );
}
export default Modal;
