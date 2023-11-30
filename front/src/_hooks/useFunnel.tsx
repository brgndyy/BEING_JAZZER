import { Children, useState, ReactNode, isValidElement } from 'react';

interface StepProps {
  name: string;
  children: ReactNode;
}

function Funnel({ children, step }: { children: ReactNode; step: string }) {
  const validElements = Children.toArray(children).filter(
    (child) => isValidElement(child) && child.props.name === step,
  );

  return <>{validElements}</>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Step({ name, children }: StepProps) {
  return <>{children}</>;
}

Funnel.Step = Step;

const useFunnel = (steps: readonly string[]) => {
  const [step, setStep] = useState(steps[0]);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [direction, setDirection] = useState<'next' | 'previous'>('next');

  const nextStepHandler = () => {
    setDirection('next');
    setStepIndex((prevStepIndex) => prevStepIndex + 1);
    setStep(steps[stepIndex + 1]);
  };

  const previousStepHandler = () => {
    setDirection('previous');
    setStepIndex((prevStepIndex) => prevStepIndex - 1);
    setStep(steps[stepIndex - 1]);
  };

  return { step, Funnel, nextStepHandler, previousStepHandler, direction };
};

export default useFunnel;
