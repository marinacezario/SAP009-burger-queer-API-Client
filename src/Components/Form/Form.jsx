import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { ErrorLabel } from "../ErrorLabel/ErrorLabel";
import { handleSubmitForm } from "../../API/users";

// styles
import styles from "./Form.module.css";

export function Form() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Please enter your email.");
      return;
    }else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
  
    if (!password) {
      setError("Please enter your password.");
      return;
    } else if (password.length < 6) {
      setError("Password should have at least 6 characters.");
      return;
    }

    handleSubmitForm(email, password)
      .then((response) => {
        const userDataRole = response.role;

        if (userDataRole === "admin") {
          navigate("/new-order");
        } else if (userDataRole === "waiter") {
          navigate("/current-orders");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.login_form}>
      <h1 className={styles.login_title}>LOGIN</h1>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        id="submit-button"
        type="submit"
        text="login"
        value="login"
        className={styles.send_btn}
      />
      <ErrorLabel value={error} />
    </form>
  );
}