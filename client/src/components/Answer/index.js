import React from 'react';
import * as Styled from './style';

function Answer({ content }) {
    return (
        <Styled.Answer>
            <Styled.Content>{content}</Styled.Content>
        </Styled.Answer>
    )
}

export default Answer;