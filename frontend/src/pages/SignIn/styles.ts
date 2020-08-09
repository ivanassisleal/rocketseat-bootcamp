import styled from 'styled-components';
import { shade } from 'polished';

import signInbackground from '../../assets/images/sign-in-background.png'

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

        h1{
            margin-bottom:24px;
        }

        input {
            background:#232129;
            border-radius:10px;
            border:2px solid #232129;
            padding: 16px;
            width:100%;
            color:#F4EDE8;

            &::placeholder {
                color:#666360;
            }

            & + input {
                margin-top:8px;
            }
        }

        button {
            margin-top:16px;
            background:#ff9000;
            border-radius:10px;
            border:0px;
            padding: 0 16px;
            height:56px;
            color: #312e38;
            width:100%;
            font-weight:500;
            transition: background-color 0.2s;

            &:hover{
                background: ${shade(0.2, '#ff9000')}
            }
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
        color:#ff9000;
        display:block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;
        display:flex;
        align-items:center;

        &:hover {
            color:${shade(0.2, '#ff9000')}
        }

        svg {
            margin-right: 16px;
        }
    }
`;
const Background = styled.div`
    flex:1;
    background:url(${signInbackground}) no-repeat center;
    background-size:cover;
`;

export { Container, Content, Background };