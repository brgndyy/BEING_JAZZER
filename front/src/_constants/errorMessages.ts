const ERROR_MESSAGES = {
  FAIL_SEND_EMAIL: '이메일 전송에 실패했어요!',
  invalid_name: '이름은 1글자 이상의 필수 입력값이에요!',
  fail_get_new_access_token: '새로운 엑세스 토큰을 받아오지 못했습니다.',
  fail_get_user_info: '유저 정보를 받아오는데에 실패했어요!',
  fail_get_chord_setting: '코드 설정을 받아오는데에 실패했어요!',
  fail_get_chord_images: '코드 이미지를 받아오는데에 실패했어요!',
  fail_fetch: '데이터 통신에 실패했어요!',
  FAIL_SIGN_UP: '회원가입에 실패했어요!',
  FAIL_LOGIN: '로그인에 실패했어요!',
  not_satisfied_chord_setting: '모든 설정이 유효하지 않아요!',
  fail_withdraw: '회원탈퇴에 실패했어요!',
} as const;

export default ERROR_MESSAGES;
