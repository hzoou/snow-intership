import styled from 'styled-components';

const Container = styled.main`
    width: fit-content;
    padding: 2rem;
    margin: 0 auto;
    font-size: 3rem;
`;

const Description = styled.div`
    font-size: 2rem;
`;

const Input = styled.input.attrs(() => ({
    type: 'text',
    placeholder: '질문을 입력하세요.'
}))`
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    border: 0;
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

export { Container, Description, Input, Submit };