import { wideUnderLine } from './loginModalContent.css';
import Button from '@/_components/_common/button/Button';

type LoginModalTriggerButtonProps = {
  handleModalOpen: () => void;
};

export default function LoginModalTriggerButton({ handleModalOpen }: LoginModalTriggerButtonProps) {
  return (
    <div>
      <Button variant="none" type="button" className={wideUnderLine} onClick={handleModalOpen}>
        로그인
      </Button>
    </div>
  );
}
