import React, { useState } from "react";
import "./no-labels-form.css";

export const Form = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log({ email });
  };

  return (
    <form onSubmit={onSubmit} className="formContainer">
      <p className="description">Enter your email:</p>
      <input
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
