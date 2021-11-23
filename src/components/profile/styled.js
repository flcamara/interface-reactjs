import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;

`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin: 8px;
        text-align: center;
    }

`;

export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    h3{
        margin-right: 10px;
    };

    a{
        font-size : 16px;
        font-weight: bold;
        color: green;
    }

`;

export const WrapperImage = styled.img`

    border-radius: 50%;
    width: 200px;
    margin: 10px;

`;

export const WrapperInfoUser = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    margin-left: 10px;
    h1{
        font-size: 32px;
        font-weight: bold;
    };
    
    h3{
        font-size: 18px;
        font-weight: bold;
    };

    h4{
        font-size: 16px;
        font-weight: bold;
    };
`;