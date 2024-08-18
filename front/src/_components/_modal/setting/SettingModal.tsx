import SettingModalTriggerButton from './SettingModalTriggerButton';
import SettingModalContent from '@/_components/_modal/setting/content/SettingModalContent';
import useModal from '@/_hooks/useModal';
import ModalWrapper from '@/_components/_common/modal/ModalWrapper';

export default function SettingModal() {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <>
      <SettingModalTriggerButton handleModalOpen={handleModalOpen} />
      <ModalWrapper isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
        <SettingModalContent handleClose={handleModalClose} />
      </ModalWrapper>
    </>
  );
}
