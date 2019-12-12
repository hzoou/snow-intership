import React, { useState, useContext } from 'react';
import * as Styled from './style';
import Question from "../../components/Question";
import Footer from "../../components/Footer";
import UserContext from "../../context/user";

function CreatePage() {
    const { user: { username, code } } = useContext(UserContext);
    const [ photo, setPhoto ] = useState('');

    return (
        <Styled.Container>
            <Question username={username} code={code} photo={photo}/>
            <Footer hashcode={code} setPhoto={setPhoto} />
        </Styled.Container>
    )
}

export default CreatePage;