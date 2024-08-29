import SettingModalTriggerButton from './SettingModalTriggerButton';
import SettingModalContent from '@/_components/_modal/setting/content/SettingModalContent';
import useModal from '@/_hooks/useModal';
import ModalWrapper from '@/_components/_common/modal/ModalWrapper';
import useChordSettingStore from '@/_store/useChordSettingStore';
import { useEffect } from 'react';
import { ChordSetting } from '@/_types';

interface SettingModalProps {
  chordSetting: ChordSetting[];
}

export default function SettingModal({ chordSetting }: SettingModalProps) {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();
  const { updateChordSetting } = useChordSettingStore();
  useEffect(() => {
    updateChordSetting(chordSetting);
  }, [updateChordSetting]);

  return (
    <>
      <SettingModalTriggerButton handleModalOpen={handleModalOpen} />
      <ModalWrapper isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
        <SettingModalContent handleClose={handleModalClose} />
      </ModalWrapper>
    </>
  );
}
