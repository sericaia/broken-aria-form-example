import React, { useState } from "react";
import "./basic-form.css";

export const Form = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log({ email });
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

      <input type="submit" value="Subscribe" className="submitBtn" />
    </form>
  );
};


