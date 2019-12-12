import React, { useState, useEffect } from 'react';
import * as Styled from './style';
import { useParams } from 'react-router-dom';

import Answer from "../../components/Answer";
import Ask from "../../components/Ask";

function QuestionPage() {
    const [ answers, setAnswers ] = useState([]);
    const [ question, setQuestion] = useState({});
    const { questionId } = useParams();

    const fetchAnswer = async () => {
        try {
            const request = {
                method: 'GET',
            };
            const res = await fetch(`http://localhost:3030/api/answer/${questionId}`, request);
            const data = await res.json();
            console.log(data);
            setAnswers(data)
        } catch (e) {}
    };

    const fetchQuestion = async () => {
        try {
            const request = {
                method: 'GET',
            };
            const res = await fetch(`http://localhost:3030/api/question/${questionId}`, request);
            const data = await res.json();
            console.log(data);
            setQuestion(data)
        } catch (e) {}

    };

    useEffect(() => {
        fetchQuestion();
        fetchAnswer()
    }, []);


    return (
        <Styled.Container>
            <Ask props={question}/>
            {answers.map(({ content }, index) => {
                return (
                    <Answer
                        key={'answer' + index}
                        content={content}
                    />
                )
            })}
        </Styled.Container>
    )
}

export default QuestionPage;