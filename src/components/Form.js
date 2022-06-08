import { useState } from "react";
import styled from "styled-components";


const FOrm = styled.form`
  order: 4;
  position: relative;
  font-size: 14px;
  line-height: 28px;

  .emailInvalid {
    color: #FB3E3E;
    font-weight: 700;
    font-size: 12px;
    position: absolute;
    line-height: 14.28px;
    padding: 0;
    margin: 0;
    top: -22.28px;
    left: 32px;
  }

  @media (min-width: 768px) {
    display: inline-block;

    .emailInvalid {
      top: unset;
      bottom: -22.28px;
    }
  }
`;

const Button = styled.button`
  background-color: var(--color1);
  font-family: 'Chivo', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 28px;
  color: var(--color2);
  width: 100%;
  height: 46px;
  border: none;
  border-radius: 28px;
  margin-top: 16px;
  transition-duration: 1s;

  &:hover {
    background-color: #B3FFE2;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    width: 162px;
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;

const Input = styled.input`
  border: none;
  background-color: var(--color3);
  font-family: 'Chivo', sans-serif;
  font-weight: 700;
  color: var(--color6);
  width: 100%;
  height: 46px;
  border-radius: 28px;
  padding-left: 32px;

  @media (min-width: 768px) {
    height: 56px;
    width: 427px;
  }
`;

const Form = () => {

  const [emailIsValid, setEmailIsValid] = useState(true);
  const emailInputHandler = () => {
    setEmailIsValid(false);
  }

  return (
    <FOrm onSubmit={event => {event.preventDefault();}}>
      <Input type="email" name="email" id="email" placeholder="Email address" onInvalid={emailInputHandler} required/>
      {!emailIsValid && <p className="emailInvalid">Oops! Please check your email</p>}
      <Button>Request Access</Button>
    </FOrm>
  );
}

export default Form;