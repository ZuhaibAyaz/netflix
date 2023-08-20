import React from 'react'
import styled from 'styled-components'
import BackgroundImg from '../components/BackgroundImg';
import Header from '../components/Header';

export default function Signup() {
  return (
    <Container>

<BackgroundImg/>
<Header/>
  
  <div className="body flex j-center a-center column">

<div className="text flex column">

<h1>Unlimited Movies and TV Shows and more</h1>
<h4>Watch Anywhere. Cancle Anytime</h4>
<h6>Ready to watch? Enter your email to create or restart your membership</h6>
</div>


<div className='form'>
  <input type='email' placeholder='Email Address' name='email'/>
  <input type='password' placeholder='Password' name='password'/>
  <button>Get Started</button>


</div>

<button>Log In</button>
  </div>


    </Container>
  )
}

const Container= styled.div``;



