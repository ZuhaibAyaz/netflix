import React from 'react'
import styled from 'styled-components'
import background from '../assets/login.jpg'
export default function BackgroundImg() {
  return (
    <Container>
        <img  src={background} alt='background'/>
    </Container>
  )

}

const Container = styled.div`
 height: 88.5vh;
 width: 100vw;

 img{
    height: 100vh;
    width: 100vw;
 }

`;
