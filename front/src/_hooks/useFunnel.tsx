import { Children, useState, ReactNode, isValidElement } from 'react';

interface StepProps {
  name: string;
  children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Step({ name, children }: StepProps) {
  return <>{children}</>;
}

const useFunnel = (steps: readonly string[]) => {
  const [step, setStep] = useState(steps[0]);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [animationDirection, setAnimationDirection] = useState<'next' | 'previous'>('next');

  function Funnel({ children }: { children: ReactNode }) {
    const validElements = Children.toArray(children).filter(
      (child) => isValidElement(child) && child.props.name === step,
    );

    return <>{validElements}</>;
  }

  Funnel.Step = Step;

  const nextStepHandler = () => {
    setAnimationDirection('next');
    setStepIndex((prevStepIndex) => prevStepIndex + 1);
    setStep(steps[stepIndex + 1]);
  };

  const previousStepHandler = () => {
    setAnimationDirection('previous');
    setStepIndex((prevStepIndex) => prevStepIndex - 1);
    setStep(steps[stepIndex - 1]);
  };

  return { step, Funnel, nextStepHandler, previousStepHandler, animationDirection };
};

export default useFunnel;
