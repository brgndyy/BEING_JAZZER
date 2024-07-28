import { modalContainer } from '../modal.css';
import { myStyle } from '@/_styles/vars.css';
import { textWrapper, text, contentWrapper, buttonWrapper } from './withDrawContent.css';
import Button from '@/_components/_common/button/Button';
import useAccessTokenStore from '@/_store/useAccessTokenStore';
import useWithdraw from '@/_hooks/mutations/useWithdraw';

interface WithdrawContentProps {
  handleModalClose: () => void;
}

export default function WithdrawContent({ handleModalClose }: WithdrawContentProps) {
  const accessToken = useAccessTokenStore((state) => state.accessToken) ?? '';

  const { handleWithdraw } = useWithdraw(accessToken);

  return (
    <div className={`${modalContainer} ${myStyle}`}>
      <div className={contentWrapper}>
        <div className={`${textWrapper} ${myStyle}`}>
          <span className={text}>정말 탈퇴하시겠습니까?</span>
          <span className={text}>탈퇴하시면 계정 복구는 불가능해요!</span>
        </div>
        <div className={buttonWrapper}>
          <Button variant="warning" onClick={handleWithdraw}>
            탈퇴
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            취소
          </Button>
        </div>
      </div>
    </div>
  );
}
