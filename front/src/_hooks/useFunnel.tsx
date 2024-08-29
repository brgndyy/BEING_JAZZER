import { Children, useState, ReactNode, isValidElement, useEffect } from 'react';

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

  const handleNextStep = () => {
    if (stepIndex < steps.length - 1) {
      setDirection('next');
      setStepIndex((prevStepIndex) => {
        const newIndex = prevStepIndex + 1;
        setStep(steps[prevStepIndex + 1]);
        return newIndex;
      });
    }
  };

  const handlePreviousStep = () => {
    if (stepIndex > 0) {
      setDirection('previous');
      setStepIndex((prevStepIndex) => {
        const newIndex = prevStepIndex - 1;
        setStep(steps[newIndex]);
        return newIndex;
      });
    }
  };

  return { step, Funnel, handleNextStep, handlePreviousStep, direction };
};

export default useFunnel;
