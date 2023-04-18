import React, { useEffect, useReducer, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Card from "../UI/LoginCard";
import classes from "./Login.module.css";
import Button from "../Login/Button";
import Input from "../Login/Input";
function emailReducer(state, action) {
  // console.log(action)
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "USER_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
}
function passwordReducer(state, action) {
  // console.log(action)
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "USER_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
}
const Login = (props) => {
  console.log(props)
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, emaildispatch] = useReducer(emailReducer, {
    value: " ",
    isValid: null,
  });
  const [passwordState, passwordDispatch] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log("Check for Validity");
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);
    return () => {
      console.log("Clean-up");
      clearTimeout(handler);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    emaildispatch({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);
    passwordDispatch({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    emaildispatch({ type: "USER_BLUR" });
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(enteredPassword.trim().length > 6);
    passwordDispatch({ type: "USER_BLUR" });
  };
  const history = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);

    history('/');
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          placeHolder="Enter your Email-Id"
        ></Input>
        <Input
          id="password"
          label="Password"
          type="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          placeHolder="Enter your Password"
        ></Input>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
