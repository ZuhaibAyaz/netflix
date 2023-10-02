import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImg";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";
import {MdOutlineArrowForwardIos} from 'react-icons/md';
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
          <h1>Enjoy big movies, hit series and more from ₹ 149.</h1>
          <h5>Join Today. Cancle Anytime.</h5>
          <h6>Ready to watch? Enter your email to create or restart your membership</h6>
          </div>
          <div className="form">
            <input
              type="email"
             placeholder="Email Address"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name="email"
              value={formValues.email}
                
            />
            
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                name="password"
                value={formValues.password}
              />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started    < MdOutlineArrowForwardIos/> </button>
            )}
          </div>
          {showPassword && <button onClick={handleSignIn}>Sign Up</button>}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    padding: 0 2.5rem;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align:center;
        font-size: 2rem;
        h1{
          padding:0 10rem;
          font-size:3rem;
          font-weight:900;
        }
        h5{
          font-weight:400;
          font-size:1.4rem;
        }
        h6{
          font-weight:400;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) => showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          width: 90%;
          color: inherit;
          filter: opacity(60%);
          padding: 1.5rem 1rem 0.5rem;
          min-height: 20px;
          font-size: 1rem;
          font-weight: 400;
          color: rgb(255, 255, 255);
          background: rgba(22, 22, 22, 0.7);
    border-color: rgba(128, 128, 128, 0.7)
    min-width: 16px
    border-width: 1px;
    border-style: solid;
    border-radius: 0.25rem;
      

    &:focus {
      outline: none;
    }   
        }

        button {
          appearance: none;
          font-style: inherit;
          font-variant: inherit;
          font-stretch: inherit;
          font-family: inherit;
          margin: 0px;
          text-decoration: none;
          -webkit-box-align: center;
          align-items: center;
          box-sizing: border-box;
          display: inline-flex;
          -webkit-box-pack: center;
          justify-content: center;
          letter-spacing: normal;
          line-height: 1;
          user-select: none;
          border: 0px;
          border-radius: 0.25rem;
          cursor: pointer;
          fill: currentcolor;
          position: relative;
          transition-duration: 250ms;
          transition-property: background-color, border-color;
          transition-timing-function: cubic-bezier(0.9, 0, 0.51, 1);
          vertical-align: text-top;
          width: auto;
          font-size: 1.5rem;
          font-weight: 500;
          min-height: 3.5rem;
          padding: 0.75rem 1.5rem;
          background: rgb(229, 9, 20);
          color: rgb(255, 255, 255);
        }
      }
      button {
        font-style: inherit;
          font-variant: inherit;
          font-stretch: inherit;
          font-family: inherit;
          margin: 0px;
          text-decoration: none;
          -webkit-box-align: center;
          align-items: center;
          box-sizing: border-box;
          display: inline-flex;
          -webkit-box-pack: center;
          justify-content: center;
          letter-spacing: normal;
          line-height: 1;
          user-select: none;
          border: 0px;
          border-radius: 0.25rem;
          cursor: pointer;
          fill: currentcolor;
          position: relative;
          transition-duration: 250ms;
          transition-property: background-color, border-color;
          transition-timing-function: cubic-bezier(0.9, 0, 0.51, 1);
          vertical-align: text-top;
          width: auto;
          font-size: 1.5rem;
          font-weight: 500;
          min-height: 3.5rem;
          padding: 0.75rem 1.5rem;
          background: rgb(229, 9, 20);
          color: rgb(255, 255, 255);
      }
    }
  }
`;



export default Signup;