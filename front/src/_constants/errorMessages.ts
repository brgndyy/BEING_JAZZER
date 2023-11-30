import deepFreeze from '@/_utils/deepFreeze';

const ERROR_MESSAGES = deepFreeze({
  fail_send_email: '이메일 전송에 실패했어요!',
  invalid_name: '이름은 1글자 이상의 필수 입력값이에요!',
});

export default ERROR_MESSAGES;
