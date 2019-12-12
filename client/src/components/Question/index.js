import React, { useRef } from 'react';
import * as Styled from './style';
import { useHistory } from 'react-router-dom';

const EMPTY_CONTENT = '항목을 모두 입력해주세요!';
const ERROR = '예상치 못한 에러가 발생했습니다!';

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
            <div>{username}님! 질문을 등록해보세요!</div>
            {photo ? <img src={photo} /> : ''}
            <section>
                <input placeholder="질문을 입력해주세요" ref={question} />
            </section>
            <button onClick={handleSubmit}>질문 등록</button>
        </Styled.Container>
    )
}

export default Question;