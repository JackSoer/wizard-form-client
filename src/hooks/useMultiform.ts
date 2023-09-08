import { ReactElement, useEffect, useState } from 'react';

const useMultiform = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState<number>(
    JSON.parse(localStorage.getItem('currentStep') as string) || 0
  );

  const next = () => {
    if (currentStep >= steps.length - 1) {
      return;
    }

    goTo(currentStep + 1);
  };

  const prev = () => {
    if (currentStep <= 0) {
      return;
    }

    goTo(currentStep - 1);
  };

  const goTo = (page: number) => {
    setCurrentStep(page);
  };

  const isLastStep = () => {
    if (currentStep >= steps.length - 1) {
      return true;
    } else {
      return false;
    }
  };

  const isFirstStep = () => {
    if (currentStep <= 0) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    localStorage.setItem('currentStep', JSON.stringify(currentStep));
  }, [currentStep]);

  return {
    step: steps[currentStep],
    steps,
    currentStep,
    goTo,
    next,
    prev,
    isFirstStep,
    isLastStep,
  };
};

export default useMultiform;
