import { wideUnderLine } from './loginModalContent.css';
import Button from '@/_components/_common/button/Button';

type Props = {
  handleModalOpen: () => void;
};

export default function LoginModalTriggerButton({ handleModalOpen }: Props) {
  return (
    <div>
      <Button variant="default" type="button" className={wideUnderLine} onClick={handleModalOpen}>
        로그인
      </Button>
    </div>
  );
}
