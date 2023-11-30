import deepFreeze from '../utils/deepFreeze';

const PROGRESS_MESSAGES = deepFreeze({
  port: '번에서 대기중',
  succeed_send_email: '정상적으로 메일이 전송 되었어요!',
  succeed_connect_database: '데이터 베이스 연결에 성공했어요!',
  succeed_sign_up: '회원가입이 정상적으로 처리 되었어요!',
});

export default PROGRESS_MESSAGES;
