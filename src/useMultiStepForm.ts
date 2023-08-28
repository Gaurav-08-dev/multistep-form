import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState(0);

  function next() {
    setCurrentStep((prev) => {
      if (prev >= steps.length - 1) {
        return prev;
      }
      return prev + 1;
    });
  }

  function prev() {
    setCurrentStep((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  }

  function gotoStep(index: number) {
    setCurrentStep(index);
  }

  return {
    currentStep,
    activeStep: steps[currentStep],
    gotoStep,
    next,
    prev,
    steps,
    isLastPage: currentStep === steps.length - 1,
    isFirstPage: currentStep === 0,
  };
}
