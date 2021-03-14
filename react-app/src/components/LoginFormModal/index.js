// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import LoginForm from './LoginForm';

function LoginFormModal({setAuthenticated}) {
  const [showModal, setShowModal] = useState(false);
//test to fix heroku
  return (
    <>
      <button className="signupButton" onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <LoginForm setAuthenticated={setAuthenticated}/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
