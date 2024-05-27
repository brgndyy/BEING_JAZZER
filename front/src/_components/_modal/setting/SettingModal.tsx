import { modalEnter, modalExit } from '../modal.css';
import { useState } from 'react';
import SettingModalTriggerButton from './SettingModalTriggerButton';
import { Modal } from 'brgndyy-react-modal';
import SettingModalContent from '@/_components/_modal/setting/content/SettingModalContent';

export default function SettingModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SettingModalTriggerButton handleModalOpen={handleModalOpen} />
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
              <SettingModalContent handleClose={handleModalClose} />
            </Modal.Container>
          </Modal.Backdrop>
        </Modal.Portal>
      </Modal>
    </>
  );
}
