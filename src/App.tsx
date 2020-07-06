import React, { useState, ReactNode } from "react";
import "./App.css";
import { Form as BasicForm } from "./components/BasicForm/basic-form";
import { Form as ErrorHandlingForm } from "./components/ErrorHandlingForm/error-handling-form";
import { Form as ErrorAriaForm } from "./components/ErrorAriaForm/error-aria-form";
import { Form as NoLabelsForm } from "./components/NoLabelsForm/no-labels-form";

interface FormDescription {
  component: ReactNode;
  title: string;
}

const forms: FormDescription[] = [
  {
    component: <NoLabelsForm />,
    title: "No Labels Form",
  },
  {
    component: <BasicForm />,
    title: "Basic Form",
  },
  {
    component: <ErrorHandlingForm />,
    title: "Error Handling Form",
  },
  {
    component: <ErrorAriaForm />,
    title: "Error Handling Form (aria)",
  },
];

function App() {
  const [currentForm, setCurrentForm] = useState<FormDescription>(forms[0]);

  return (
    <div className="App">
      <header>
        <h1>Newsletter form</h1>
        <nav>
          <ul className="nav-list">
            {forms.map((form) => (
              <li key={form.title} className="nav-listitem">
                <button onClick={() => setCurrentForm(form)}>
                  {form.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <hr />

        {currentForm ? (
          <>
            <h2>{currentForm.title}</h2>
            {currentForm.component}
          </>
        ) : null}
      </main>
    </div>
  );
}

export default App;
