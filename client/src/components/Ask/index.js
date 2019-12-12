import React, { useRef } from 'react';
import * as Styled from './style';

import { EMPTY_CONTENT, ERROR } from "../../constant";

function Ask({ content, photo, id }) {
    const answer = useRef();

    const handleSubmit = () => {
        const checkValidate = validate();
        if (checkValidate) return alert(checkValidate);
        fetchAddAnswer();
    };

    const fetchAddAnswer = async () => {
        const content = answer.current.value;
        const request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ content })
        };
        try {
            const res = await fetch(`http://localhost:3030/api/answer/${id}`, request);
            const result = await res;
            if (!result.ok) throw Error();
            window.location.reload();
        } catch (e) {
            alert(ERROR);
        }
    };

    const validate = () => {
        const value = answer.current.value;
        if (!value) return EMPTY_CONTENT;
        return false;
    };


    return (
        <Styled.Answer>
            {photo ? <img src={photo} /> : ''};
            <Styled.Content>{content}</Styled.Content>
            <Styled.Input ref={answer} />
            <Styled.Submit onClick={handleSubmit}>답변 등록</Styled.Submit>
        </Styled.Answer>
    )
}

export default Ask;