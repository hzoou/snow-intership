import styled from 'styled-components';

const Container = styled.main`
    width: fit-content;
    margin: 0 auto;
`;

const Section = styled.section`
    width: 100%;
    margin-bottom: 1rem;
`;

const Input = styled.input.attrs(() => ({
    type: 'text',
}))`
    width: 100%;
    margin-top: 0.5rem;
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

export { Container, Section, Input, Submit };
