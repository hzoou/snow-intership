import React, { useEffect } from 'react';
import * as Styled from './style';
import axios from 'axios';

function Footer({ hashcode, setPhoto }) {
    const photobooth = ['PHOTOBOOTH_ONE_167', 'PHOTOBOOTH_ONE_166', 'PHOTOBOOTH_ONE_165', 'PHOTOBOOTH_ONE_164', 'PHOTOBOOTH_ONE_163', 'PHOTOBOOTH_ONE_162'];

    const getImageUrl = async (hashcode, photoboothTitle) => {
        const callUrl = `https://openapi.zepeto.io/graphics/booth/${photoboothTitle}?targets=${hashcode.toUpperCase()}&service=zepeto&width=100`;
        let resultUrl;
        try {
            const res = await axios({
                method: 'post',
                url: callUrl,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            });
            resultUrl = res.data.url;
            setPhoto(resultUrl);
        } catch (e) {
            console.log(e);
            resultUrl = '';
        }

        return resultUrl;
    };

    const randomItem = photobooth => {
        return photobooth[Math.floor(Math.random() * photobooth.length)];
    };

    const handleSubmit = () => {
        const photoboothTitle = randomItem(photobooth);
        getImageUrl(hashcode, photoboothTitle);
    };

    useEffect(() => {
        handleSubmit();
    }, []) ;

    return (
        <Styled.Footer>
            <Styled.Item onClick={handleSubmit}>캐릭터 변경</Styled.Item>
        </Styled.Footer>
    )
}

export default Footer;