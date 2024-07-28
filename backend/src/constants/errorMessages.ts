import deepFreeze from '../utils/deepFreeze';

export const CHORD_IMAGE_ERROR_MESSAGE = {
  FAIL_SEND_CHORD_IMAGES: '코드 이미지를 보내는데에 실패했어요!',
  FAIL_GET_CHORD_IMAGES: '코드 이미지 데이터를 찾는데에 실패했어요!',
} as const;

export const USER_CHORD_SETTING_ERROR_MESSAGE = {
  FAIL_TRANSFORM_USER_SETTING: '코드 설정에 맞게 변형 시키는데에 실패했어요!',
  FAIL_SAVE_USER_SETTING: '사용자 코드 설정을 저장하는데에 실패했어요!',
};

const ERROR_MESSAGES = deepFreeze({
  DEFAULT_ERROR: '알수 없는 에러가 발생했어요!',
  ROUTE_ERROR: '해당 경로를 찾을 수 없어요!',
  NOT_FOUND_USER: '회원정보 조회에 실패했어요!',
  FAIL_SEND_EMAIL: '이메일을 보내는데에 실패했어요!',
  NOT_FOUND_EMAIL_RECORD: '이메일 인증 기록이 존재하질 않아요!',
  EXISTING_USER: '이미 존재하는 회원이에요!',
  FAIL_SIGN_UP: '회원가입에 실패했어요!',
  NOT_DEFINED_JWT_SECRET: 'JWT 시그니처를 정의해주세요!',
  FAIL_SEND_NEW_ACCESS_TOKEN: '새로운 액세스 토큰을 보내는데에 실패했어요!',
  FAIL_VERIFY_REFRESH_TOKEN: '리프레시 토큰 조회에 실패했어요!',
  FAIL_VERIFY_ACCESS_TOKEN: '액세스 토큰 조회에 실패했어요!',
  FAIL_CREATE_REFRESH_TOKEN_DATA: '데이터베이스에 리프레시 토큰을 생성하는데에 실패했어요!',
  FAIL_SEND_USER_INFO: '유저 정보를 보내는데에 실패했어요!',
  FAIL_SET_CHORD_IMAGES: '코드이미지들을 저장하는데에 실패했어요!',
  FAIL_LOGIN: '로그인에 실패했어요!',
  FAIL_DELETE_REFRESH_TOKEN_DATA: '리프레시토큰 데이터 삭제에 실패했어요!',
  NOT_FOUND_USER_SETTING: '유저 코드 셋팅 값을 찾는데에 실패했어요!',
  FAIL_CONVERT_USER_SETTING: '유저 코드 셋팅을 변환하는데에 실패했어요!',
  FAIL_DELETE_USER_SETTING: '유저 코드 셋팅을 삭제하는데에 실패했어요!',
  NOT_FOUND_KEY: '해당 키를 찾는데에 실패했어요!',
  NOT_FOUND_CHORD: '해당 코드를 찾는데에 실패했어요!',
  NOT_VERIFIED_TOKEN: '토큰이 유효하지 않아요!',
  EXPIRED_TOKEN: '토큰이 만료되었어요!',
  fail_withdraw: '회원탈퇴를 하는데에 실패했어요!',
});

export default ERROR_MESSAGES;
