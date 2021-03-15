// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import LoginForm from './LoginForm';

function LoginFormModal({setAuthenticated, authenticated}) {
  const [showModal, setShowModal] = useState(false);
//test to fix heroku
  return (
    <>
      <button className="signupButton" style={{marginRight:"1rem"}} onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <LoginForm setAuthenticated={setAuthenticated} authenticated={authenticated}/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
