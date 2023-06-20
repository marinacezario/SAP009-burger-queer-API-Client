import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { ErrorLabel } from "../ErrorLabel/ErrorLabel";
import { handleSubmitForm } from "../../api/users";

// styles
import styles from "./Form.module.css";
import { errorHandler } from "../../error-handler";
import {setItem, getItem} from '../../storage/localStorage';

export function Form() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

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

    // console.log(error);
    handleSubmitForm(email, password)
      .then((response) => {
        // console.log(email);
        console.log(response);
        setItem('token', response.data.accessToken);
        console.log(getItem('token'));
        const userDataRole = response.data.user.role;

        if (userDataRole === "admin") {
          navigate("/admin");
        } else if (userDataRole === "waiter") {
          navigate("/new-order");
        }
      })
      .catch((error) => {
        const errorMessage = errorHandler(error);
        setError(errorMessage);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.login_form}
      data-testid="form"
    >
      <h1 className={styles.login_title}>LOGIN</h1>
      <Input
        id="email-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        data-testid="email-input"
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        data-testid="password-input"
      />
      <Button
        id="submit-button"
        type="submit"
        text="login"
        value="login"
        className={styles.send_btn}
        data-testid="submit-button"
      />
      {error !== null && <ErrorLabel value={error} />}{" "}
    </form>
  );
}
