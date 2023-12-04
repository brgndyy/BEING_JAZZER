import deepFreeze from '../utils/deepFreeze';

const ERROR_MESSAGES = deepFreeze({
  default_error: '알수 없는 에러가 발생했어요!',
  route_error: '해당 경로를 찾을 수 없어요!',
  not_found_user: '회원정보 조회에 실패했어요!',
  fail_send_email: '이메일을 보내는데에 실패했어요!',
  not_found_email_record: '이메일 인증 기록이 존재하질 않아요!',
  existing_user: '이미 존재하는 회원이에요!',
  fail_sign_up: '회원가입에 실패했어요!',
  not_defined_jwt_secret: 'JWT 시그니처를 정의해주세요!',
  fail_send_new_access_token: '새로운 액세스 토큰을 보내는데에 실패했어요!',
  fail_verify_refresh_token: '리프레시 토큰 조회에 실패했어요!',
  fail_create_refresh_token_data: '데이터베이스에 리프레시 토큰을 생성하는데에 실패했어요!',
  fail_send_user_info: '유저 정보를 보내는데에 실패했어요!',
});

export default ERROR_MESSAGES;
