import deepFreeze from '../utils/deepFreeze';

const ERROR_MESSAGES = deepFreeze({
  default_error: '알수 없는 에러가 발생했어요!',
  route_error: '해당 경로를 찾을 수 없어요!',
});

export default ERROR_MESSAGES;
