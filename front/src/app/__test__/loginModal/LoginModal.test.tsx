import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import LoginModal from '@/_components/_modal/LoginModal';

describe('LoginModal', () => {
  test('LoginModal 컴포넌트 렌더링 테스트', () => {
    render(<LoginModal handleClose={() => {}} />);
    // 테스트 코드 작성
  });
});
