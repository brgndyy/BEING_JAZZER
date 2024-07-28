'use client';

import Button from '../_common/button/Button';
import { Modal } from 'brgndyy-react-modal';
import { modalExit, modalEnter } from '../_modal/modal.css';
import WithdrawContent from '../_modal/withdraw/WithdrawContent';
import { triggerButton } from '../_modal/withdraw/withDrawContent.css';
import useModal from '@/_hooks/useModal';

export default function WithdrawTriggerButton() {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <>
      <Button variant="warning" onClick={handleModalOpen} className={triggerButton}>
        회원 탈퇴
      </Button>
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
              <WithdrawContent handleModalClose={handleModalClose} />
            </Modal.Container>
          </Modal.Backdrop>
        </Modal.Portal>
      </Modal>
    </>
  );
}
