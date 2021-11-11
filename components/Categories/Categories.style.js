import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 20px 0;
`

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    padding:10px 0;
    justify-content: space-evenly;
    margin: 0 auto;
    color: var(--medGrey);
    font-size: var(--fontSm);

    .card{
        margin: 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            color: var(--darkGrey);
            font-weight: 600;
            font-size: var(--fontLg);
        }
        
    }

`
