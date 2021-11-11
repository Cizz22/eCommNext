import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0 20px;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    max-width: var(--maxWidth);
    padding:30px 15px 0 0;
    justify-content: space-between;
    margin: 0 auto;
    color: var(--medGrey);
    font-size: var(--fontSm);

    .input{
        width: 20%;
        text-align: center;
        border: 1px solid var(--darkGrey);

        ::placeholder{
            color: var(--darkgrey);
        }
    }

    .logo{
        line-height: 5px;
        font-weight: 600;
        font-size: var(--fontLg);
    }

    .userCart{
        display: flex;
        justify-content: space-between;
        min-width: 4%;
        font-size: var(--fontMd);
    }

    .links {
        display: flex;
        width: 100%;
        justify-content: center;
        min-height: 85px;
        align-items: center;
        border-top: 1px solid black;
        border-bottom: 1px solid black;

        div{
            margin: 0 60px;

            a{
                text-decoration: none;
                font-weight:600;
                color: var(--darkGrey);
            }
        }
    }
`

