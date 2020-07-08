import React, { useState, ReactNode } from "react";
import "./App.css";
import { Form as BasicForm } from "./components/BasicForm/basic-form";
import { Form as ErrorHandlingForm } from "./components/ErrorHandlingForm/error-handling-form";
import { Form as ErrorAriaForm } from "./components/ErrorAriaForm/error-aria-form";
import { Form as NoLabelsForm } from "./components/NoLabelsForm/no-labels-form";
import noLabelsFormCodeImage from "./assets/no-labels-form.png";
import basicFormCodeImage from "./assets/basic-form.png";
import errorHandlingFormCodeImage from "./assets/error-handling-form.png";
import errorAriaFormCodeImage from "./assets/error-aria-form.png";
import noLabelsFormVoiceOverImage from "./assets/no-labels-form-voice-over.png";
import basicFormVoiceOverImage from "./assets/basic-form-voice-over.png";
import errorHandlingFormVoiceOverImage from "./assets/error-handling-form-voice-over.png";
import errorAriaFormVoiceOverImage from "./assets/error-aria-form-voice-over.png";

interface FormDescription {
  component: ReactNode;
  title: string;
  codeImage: any;
  voiceOverImage: any;
}

const forms: FormDescription[] = [
  {
    component: <NoLabelsForm />,
    title: "No Labels Form",
    codeImage: noLabelsFormCodeImage,
    voiceOverImage: noLabelsFormVoiceOverImage,
  },
  {
    component: <BasicForm />,
    title: "Basic Form",
    codeImage: basicFormCodeImage,
    voiceOverImage: basicFormVoiceOverImage,
  },
  {
    component: <ErrorHandlingForm />,
    title: "Error Handling Form",
    codeImage: errorHandlingFormCodeImage,
    voiceOverImage: errorHandlingFormVoiceOverImage,
  },
  {
    component: <ErrorAriaForm />,
    title: "Error Handling Form (aria)",
    codeImage: errorAriaFormCodeImage,
    voiceOverImage: errorAriaFormVoiceOverImage,
  },
];

function App() {
  const [currentForm, setCurrentForm] = useState<FormDescription>(forms[0]);
  const [showCodeImage, setShowCodeImage] = useState(false);
  const [showVoiceOverImage, setShowVoiceOverImage] = useState(false);

  const toggleCodeImage = () => {
    setShowVoiceOverImage(false);
    setShowCodeImage(!showCodeImage);
  };

  const toggleVoiceOverImage = () => {
    setShowCodeImage(false);
    setShowVoiceOverImage(!showVoiceOverImage);
  };

  const changeForm = (form: FormDescription) => {
    setCurrentForm(form);

    // reset controllers
    setShowCodeImage(false);
    setShowVoiceOverImage(false);
  }

  return (
    <div className="App">
      <header>
        <h1>Newsletter form</h1>
        <nav>
          <ul className="nav-list">
            {forms.map((form) => (
              <li key={form.title} className="nav-listitem">
                <button onClick={() => changeForm(form)}>
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

        <hr />

        <div className="controllers">
          <button type="button" className="controller" onClick={toggleCodeImage}>
            {showCodeImage ? "Hide code" : "Show code" }
          </button>

          <button type="button" className="controller" onClick={toggleVoiceOverImage}>
            {showVoiceOverImage ? "Hide VoiceOver" : "Show VoiceOver"}
          </button>
        </div>

        <div>
          {showCodeImage ? (
            <img
              src={currentForm.codeImage}
              className="code-image"
              alt="code (TODO: add alt per img)"
            />
          ) : null}

          {showVoiceOverImage ? (
            <img
              src={currentForm.voiceOverImage}
              className="voice-over-image"
              alt="voice over (TODO: add alt per img)"
            />
          ) : null}
        </div>
      </main>
    </div>
  );
}

export default App;
