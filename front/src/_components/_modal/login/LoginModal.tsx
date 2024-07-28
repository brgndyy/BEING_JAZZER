import { modalExit, modalEnter } from '../modal.css';
import { Modal } from 'brgndyy-react-modal';
import React, { useState } from 'react';
import LoginModalTriggerButton from './LoginModalTriggerButton';
import LoginModalContent from './content/LoginModalContent';

export default function LoginModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <LoginModalTriggerButton handleModalOpen={handleModalOpen} />
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        mountAnimation={modalEnter}
        unMountAnimation={modalExit}
        animationTime={300}
      >
        <Modal.Portal id="portal">
          <Modal.Backdrop opacity="rgba(0, 0, 0, 0.35)">
            <Modal.Container>
              <LoginModalContent handleClose={handleModalClose} />
            </Modal.Container>
          </Modal.Backdrop>
        </Modal.Portal>
      </Modal>
    </>
  );
}
