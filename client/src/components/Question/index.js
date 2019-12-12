import React, { useRef } from 'react';
import * as Styled from './style';
import { useHistory } from 'react-router-dom';

import { EMPTY_CONTENT, ERROR } from "../../constant";

function Question({ username, code, photo }) {
    const history = useHistory();
    const question = useRef('');

    const handleSubmit = () => {
        const checkValidate = validate();
        if (checkValidate) return alert(checkValidate);
        fetchAddQuestion();
    };

    const fetchAddQuestion = async () => {
        const content = question.current.value;
        const request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username, code, content, photo })
        };
        try {
            const res = await fetch(`http://localhost:3030/api/question/create`, request);
            const data = await res.json();
            const { id } = data;
            history.replace(`../question/${id}`);
        } catch (e) {
            alert(ERROR);
        }
    };

    const validate = () => {
        const value = question.current.value;
        if (!value) return EMPTY_CONTENT;
        return false;
    };

    return (
        <Styled.Container>
            <Styled.Description>{username}님! 질문을 등록해보세요!</Styled.Description>
            {photo ? <img src={photo} /> : ''}
            <section>
                <Styled.Input ref={question} />
            </section>
            <Styled.Submit onClick={handleSubmit}>질문 등록</Styled.Submit>
        </Styled.Container>
    )
}

export default Question;