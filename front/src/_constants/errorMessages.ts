import deepFreeze from '@/_utils/deepFreeze';

const ERROR_MESSAGES = deepFreeze({
  fail_send_email: '이메일 전송에 실패했어요!',
  invalid_name: '이름은 1글자 이상의 필수 입력값이에요!',
  fail_get_new_access_token: '새로운 엑세스 토큰을 받아오지 못했습니다.',
  fail_get_user_info: '유저 정보를 받아오는데에 실패했어요!',
  fail_get_chord_setting: '코드 설정을 받아오는데에 실패했어요!',
});

export default ERROR_MESSAGES;
