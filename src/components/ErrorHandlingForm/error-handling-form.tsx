import React, { useState } from "react";
import "./error-handling-form.css";

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
        type="email"
        name="email"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
        required
      />

      <div className="error">{error ? <p>{error}</p> : null}</div>

      <input type="submit" value="Subscribe" className="submitBtn" />
    </form>
  );
};
