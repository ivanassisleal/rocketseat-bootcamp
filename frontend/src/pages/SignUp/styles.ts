import styled from 'styled-components';
import { shade } from 'polished';

import signUpbackground from '../../assets/images/sign-up-background.png'

const Container = styled.div`
    height:100vh;
    display:flex;
    align-items:stretch;
`;

const Content = styled.div`
    display:flex;
    flex-direction:column;

    justify-content:center;
    align-items:center;

    max-width:700px;
    width:100%;

    form {
        margin: 80px 0;
        width: 340px;
        text-align:center;

        h1 {
            margin-bottom:24px;
        }

        a {
            color:#F4EDE8;
            display:block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color:${shade(0.2, '#F4EDE8')}
            }
        }
    }

    > a {
        color:#F4EDE8;
        display:block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;
        display:flex;
        align-items:center;

        &:hover {
            color:${shade(0.2, '#F4EDE8')}
        }

        svg {
            margin-right: 16px;
        }
    }
`;

const Background = styled.div`
    flex:1;
    background:url(${signUpbackground}) no-repeat center;
    background-size:cover;
`;

export { Container, Content, Background };