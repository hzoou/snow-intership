import React from 'react';
import * as Styled from './style';
import CreateInput from "../../components/CreateInput";

function MainPage() {
    return (
        <Styled.Container>
            질문을 만들어보세요!
            <CreateInput />
        </Styled.Container>
    )
}

export default MainPage;