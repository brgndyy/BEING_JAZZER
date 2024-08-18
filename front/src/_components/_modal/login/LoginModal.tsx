import LoginModalTriggerButton from './LoginModalTriggerButton';
import LoginModalContent from './content/LoginModalContent';
import useModal from '@/_hooks/useModal';
import ModalWrapper from '@/_components/_common/modal/ModalWrapper';

export default function LoginModal() {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <>
      <LoginModalTriggerButton handleModalOpen={handleModalOpen} />
      <ModalWrapper isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
        <LoginModalContent handleClose={handleModalClose} />
      </ModalWrapper>
    </>
  );
}
