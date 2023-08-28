import { useMultiStepForm } from "./useMultiStepForm";
import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import UserForm from "./UserForm";
import { FormEvent, useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};
function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const {
    steps,
    currentStep,
    gotoStep,
    next,
    prev,
    activeStep,
    isLastPage,
    isFirstPage,
  } = useMultiStepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastPage) return next();
    alert("Successful Account Creation");
  }
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        fontFamily: "Arial",
        maxWidth:"max-content"
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
          {currentStep + 1} / {steps.length}
        </div>
        {steps[currentStep]}
        <div
          style={{
            position: "absolute",
            bottom: "0.5rem",
            right: "0.5rem",
            display: "flex",
            gap: "0.1rem",
            outline: "none",
          }}
        >
          {currentStep + 1 > 1 ? <button type="submit">{isLastPage ? "Finish" : "Prev"}</button> : ""}
          {currentStep + 1 < steps.length ? (
            <button type="submit">Next</button>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
