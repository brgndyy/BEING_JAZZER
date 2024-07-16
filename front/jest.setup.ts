import '@testing-library/jest-dom';

// TODO   Cannot find module 'msw/node' from 'src/_mocks/server.ts' 이런 에러가 계속 발생합니다.
// 해당 이슈를 찾았지만 해결책이 딱히 없는거 같습니다..
// https://github.com/mswjs/msw/issues/1786
// msw를 사용한 테스트 코드 작성은 일단 멈춥니다.
// import { server } from './src/_mocks/server';

// beforeAll(() => server.listen());
// // 각 테스트 후에 핸들러 초기화
// afterEach(() => server.resetHandlers());
// // 테스트 완료 후 서버 종료
// afterAll(() => server.close());
