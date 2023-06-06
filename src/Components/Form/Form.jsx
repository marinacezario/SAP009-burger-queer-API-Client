import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { ErrorLabel } from "../ErrorLabel/ErrorLabel";
import { handleSubmitForm } from "../../API/users";

// styles
import styles from "./Form.module.css";
import { errorHandler } from "../../error-handler";

export function Form() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(error);
    handleSubmitForm(email, password)
      .then((response) => {
        // console.log(email);
        // console.log(password);
        const userDataRole = response.role;

        if (userDataRole === "admin") {
          navigate("/new-order");
        } else if (userDataRole === "waiter") {
          navigate("/current-orders");
        }
      })
      .catch((error) => {
       const errorMessage = errorHandler(error);
       setError(errorMessage);
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