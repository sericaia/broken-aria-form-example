import React, { useState } from "react";
import "./error-aria-form.css";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    // shows an error
    setError("The email is invalid. Please fix it.");
  };

  return (
    <form onSubmit={onSubmit} className="formContainer" noValidate={true}>
      <label htmlFor="email" className="formLabel">
        Enter your email:
      </label>
      <input
        id="email"
        aria-describedby="error"
        type="email"
        name="email"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
        required
      />

      <div id="error" className="error">
        {error ? <p>{error}</p> : null}
      </div>

      <input
        aria-describedby="error"
        type="submit"
        value="Subscribe"
        className="submitBtn"
      />
    </form>
  );
};
