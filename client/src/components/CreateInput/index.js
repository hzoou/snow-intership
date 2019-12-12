import React, { useRef, useContext } from 'react';
import * as Styled from './style';
import { useHistory } from 'react-router-dom';

import UserContext from '../../context/user';
import { EMPTY_CONTENT, ERROR } from "../../constant";

function CreateInput() {
    const { setUser } = useContext(UserContext);
    const history = useHistory();
    const name = useRef();
    const code = useRef();
    const user = {};

    const handleSubmit = () => {
        user['username'] = name.current.value;
        user['code'] = code.current.value;

        const checkValidate = validate();
        if (checkValidate) return alert(checkValidate);
        fetchLogin();
    };

    const fetchLogin = async () => {
        const { username, code } = user;
        const request = {
            withCredentials: true,
            method: 'GET',
            mode: 'cors',
            credentials: 'include'
        };
        const queryString = `username=${username}&code=${code}`;
        try {
            const res = await fetch(`http://localhost:3030/api/user/login?${queryString}`, request);
            const result = await res;
            if (!result.ok) throw Error();
            setUser(user);
            history.push(`../create`);
        } catch (e) {
            alert(ERROR);
        }
    };

    const validate = () => {
        const { username, code } = user;
        if (!username || !code) return EMPTY_CONTENT;
        return false;
    };

    return (
        <Styled.Container>
            <Styled.Section>
                <h3>이름을 입력하세요</h3>
                <Styled.Input ref={name}/>
            </Styled.Section>
            <Styled.Section>
                <h3>제페토 코드를 입력하세요</h3>
                <Styled.Input ref={code}/>
            </Styled.Section>
            <Styled.Submit onClick={handleSubmit}>질문 생성</Styled.Submit>
        </Styled.Container>
    )
}

export default CreateInput;