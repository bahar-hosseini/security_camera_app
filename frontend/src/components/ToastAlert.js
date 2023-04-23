import React,{useState} from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ToastAlert({text}) {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);

  return (
    <ToastContainer position="top-end" className="p-3">
    <Toast
    show={show}
    variant='Danger'
    className="d-inline-block m-1"
    bg= 'danger'
    onClose={toggleShow}

  >
    <Toast.Header>
      <img
        src="holder.js/20x20?text=%20"
        className="rounded me-2"
        alt=""
      />
      <strong className="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
    </Toast.Header>
    <Toast.Body >
     <h6 className='text-white'> {text}</h6>
    </Toast.Body>
  </Toast>
  </ToastContainer>
  );
}

export default ToastAlert