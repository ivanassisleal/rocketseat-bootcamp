import styled from 'styled-components';
import { shade } from 'polished';

const Container = styled.button`
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

        &:hover {
            background: ${shade(0.2, '#ff9000')}
        }
`;

export default Container;