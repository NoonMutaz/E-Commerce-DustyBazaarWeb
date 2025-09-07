import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Login from './Login';

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div variant="primary" onClick={handleShow}>
        Signup
      </div>

      <Modal show={show}  onHide={handleClose} className='pt-5' centered>
        <Modal.Header closeButton>
          <Modal.Title>Sigin to your account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Login/>
        </Modal.Body>
        {/* <div className='d-flex justify-content-center'>
                <Button  style={{ backgroundColor: 'rgb(27, 46, 46)',  width:'40%'}} onClick={handleClose}>
            Signup
          </Button> 


            </div>          <Modal.Footer className='d-flex justify-content-center'>
          <Link variant="primary" onClick={handleClose}  style={{ textDecoration: 'none',  }}>
            You dont have an account? Register
          </Link>
     */}
        {/* </Modal.Footer>     */}

      </Modal>
    </>
  );
}

export default LoginModal;