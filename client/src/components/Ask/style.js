import styled from "styled-components";

const Answer = styled.section`
    margin-top: 1rem;
    padding: 1rem;
    background: white;
    border-radius: 0.5rem;
`;

const Content = styled.article`
    margin-bottom: 1rem;
    font-weight: 400;
`;

const Input = styled.input.attrs(() => ({
    type: 'text',
    placeholder: '답변을 등록하세요'
}))`
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid #d6d6d6;
    font-weight: 100;
`;


const Submit = styled.button`
    display: block;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    border: 0;
    background-color: #FF5722E0;
    color: #ffffff;
    cursor: pointer;
    font-weight: 100;
    
    &:hover {
        background-color: #FF5722;
    }
`;


export { Answer, Content, Input, Submit };
