import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import useOutSideClick from '../useOutsideClick';

function TestComponent({
  onOutsideClick,
  onInsideClick,
}: {
  onOutsideClick: () => void;
  onInsideClick: () => void;
}) {
  const ref = useOutSideClick<HTMLDivElement>({
    onOutsideClick,
    onInsideClick,
  });

  return (
    <div>
      <div ref={ref} data-testid="inside">
        내부 요소
      </div>
      <div data-testid="outside">외부 요소</div>
    </div>
  );
}

describe('useOutSideClick에 대한 테스트 코드를 작성한다.', () => {
  test('요소의 내부를 클릭했을때 onInsideClick 함수를 호출한다.', () => {
    const onInsideClick = jest.fn();
    const onOutsideClick = jest.fn();

    const { getByTestId } = render(
      <TestComponent onInsideClick={onInsideClick} onOutsideClick={onOutsideClick} />,
    );

    const insideElement = getByTestId('inside');

    fireEvent.click(insideElement);

    expect(onInsideClick).toHaveBeenCalled();
    expect(onOutsideClick).not.toHaveBeenCalled();
  });

  test('요소의 외부를 클릭했을때 onOutSideClick 함수를 호출한다.', () => {
    const onInsideClick = jest.fn();
    const onOutsideClick = jest.fn();

    const { getByTestId } = render(
      <TestComponent onInsideClick={onInsideClick} onOutsideClick={onOutsideClick} />,
    );

    const outsideElement = getByTestId('outside');

    fireEvent.click(outsideElement);

    expect(onOutsideClick).toHaveBeenCalled();
    expect(onInsideClick).not.toHaveBeenCalled();
  });
});
