import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';
import SignInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   place-content: center;
   width: 100%;
   max-width: 700px;

`;

const appearFromLeft = keyframes`
from {
opacity: 0;
transform: translateX(-50px);
}

to {
  opacity: 1;
  transform: translateX(0);
}
`;

export const AnimatorContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   animation: ${appearFromLeft} 1s;

form {
    margin: 80px 0;
    width: 340px;
    text-align: center;


   h1{
     margin-bottom: 24px;
   }



   a{
       color: #F4EDE8;
       display: block;
       text-decoration: none;
       margin-top: 24px;

       transition: color 0.2s;

     &:hover{
       color: ${shade(0.2, '#F4EDE8')}
     }
     }


   }

   > a {
       color: #F4EDE8;
       display: block;
       text-decoration: none;
       margin-top: 24px;
       display: flex;
       align-items: center;

       transition: color 0.2s;

     &:hover{
       color: ${shade(0.2, '#F4EDE8')}
     }

     svg {
       margin-right: 10px;
     }
     }

`;

export const Background = styled.div`
   flex: 1;
   background: url(${SignInBackground}) no-repeat center;
   background-size: cover;
`;
