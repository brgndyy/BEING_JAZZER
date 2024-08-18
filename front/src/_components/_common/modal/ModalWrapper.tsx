import type { PropsWithChildren } from 'react';
import { Modal } from 'brgndyy-react-modal';
import { modalExit, modalEnter } from '@/_components/_modal/modal.css';

interface ModalWrapperProps extends PropsWithChildren {
  isModalOpen: boolean;
  handleModalClose: () => void;
}

export default function ModalWrapper({
  isModalOpen,
  handleModalClose,
  children,
}: ModalWrapperProps) {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={handleModalClose}
      mountAnimation={modalEnter}
      unMountAnimation={modalExit}
      animationTime={300}
    >
      <Modal.Portal id="portal">
        <Modal.Backdrop opacity="rgba(0, 0, 0, 0.35)">
          <Modal.Container>{children}</Modal.Container>
        </Modal.Backdrop>
      </Modal.Portal>
    </Modal>
  );
}
