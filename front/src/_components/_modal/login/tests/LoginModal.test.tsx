import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginModal from '@/_components/_modal/login/content/LoginModalContent';

// describe('LoginModalTriggerButton 컴포넌트에 관한 테스트 코드 작성', () => {
//   it('Trigger 버튼을 클릭하면 LoginModalContent가 렌더링 된다.', () => {
//     render(<LoginModal handleClose={() => {}} />);

//     // data-testid 속성을 사용하여 버튼 찾기
//     const triggerButton = screen.getByTestId('login-trigger-button');

//     // "로그인" 버튼 클릭
//     fireEvent.click(triggerButton);

//     // 모달이 열렸는지 확인 (모달 내 특정 텍스트나 요소가 존재하는지 확인)
//     const modalContent = screen.getByText('로그인 하기');
//     expect(modalContent).toBeInTheDocument();
//   });
// });

describe('LoginModal에 관한 테스트 코드 작성', () => {
  it('LoginModal 컴포넌트 렌더링 테스트', () => {
    render(<LoginModal handleClose={() => {}} />);
    const triggerButton = screen.getByRole('button', { name: '로그인 하기' });
    expect(triggerButton).toBeInTheDocument();
  });

  // test('모달 내용 확인', () => {
  //   render(<LoginModal handleClose={() => {}} />);
  //   const triggerButton = screen.getByRole('button', { name: '로그인' });
  //   fireEvent.click(triggerButton);
  //   const modalContent = screen.getByText('로그인');
  //   expect(modalContent).toBeInTheDocument();
  //   // 모달 내부의 다른 내용들도 필요에 따라 확인합니다.
  // });

  // test('닫기 버튼 클릭 시 모달이 닫히는지 테스트', () => {
  //   render(<LoginModal handleClose={() => {}} />);
  //   const triggerButton = screen.getByRole('button', { name: '로그인' });
  //   fireEvent.click(triggerButton);
  //   const closeButton = screen.getByRole('button', { name: /닫기/i });
  //   fireEvent.click(closeButton);
  //   expect(screen.queryByText('로그인')).not.toBeInTheDocument();
  // });
});
