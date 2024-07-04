import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import useFunnel from '../useFunnel';

const FunnelComponent = ({ steps }: { steps: string[] }) => {
  const { step, Funnel, handleNextStep, handlePreviousStep } = useFunnel(steps);

  return (
    <div>
      <Funnel step={step}>
        {steps.map((stepName) => (
          <Funnel.Step key={stepName} name={stepName}>
            <div data-testid={`step-${stepName}`}>{stepName}</div>
          </Funnel.Step>
        ))}
      </Funnel>
      <button onClick={handleNextStep}>다음</button>
      <button onClick={handlePreviousStep}>이전</button>
    </div>
  );
};

describe('useFunnel에 대한 테스트 코드 작성', () => {
  const steps = ['Step1', 'Step2', 'Step3'];

  it('첫번째 스텝 컴포넌트를 정상적으로 렌더링 해야한다.', () => {
    render(<FunnelComponent steps={steps} />);
    expect(screen.getByTestId('step-Step1')).toBeInTheDocument();
  });

  it('다음 버튼을 클릭하면 정상적으로 다음 스텝이 렌더링 되어야한다.', () => {
    render(<FunnelComponent steps={steps} />);
    fireEvent.click(screen.getByText('다음'));
    expect(screen.getByTestId('step-Step2')).toBeInTheDocument();
  });

  it('이전 버튼을 클릭하면 정상적으로 이전 스텝이 렌더링 되어야한다.', () => {
    render(<FunnelComponent steps={steps} />);
    fireEvent.click(screen.getByText('다음'));
    fireEvent.click(screen.getByText('이전'));
    expect(screen.getByTestId('step-Step1')).toBeInTheDocument();
  });

  it('첫번째 스텝에서는 이전 버튼을 눌러도 아무런 이벤트가 발생하면 안된다.', () => {
    render(<FunnelComponent steps={steps} />);
    fireEvent.click(screen.getByText('이전'));
    expect(screen.getByTestId('step-Step1')).toBeInTheDocument();
  });

  it('마지막 스텝에서는 다음 버튼을 눌러도 아무런 이벤트가 발생하면 안된다.', () => {
    render(<FunnelComponent steps={steps} />);
    fireEvent.click(screen.getByText('다음'));
    fireEvent.click(screen.getByText('다음'));
    fireEvent.click(screen.getByText('다음'));
    expect(screen.getByTestId('step-Step3')).toBeInTheDocument();
  });
});
