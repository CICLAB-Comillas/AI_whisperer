// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TranscribeAudio = ({ url }) => {
    const [showTextbox, setShowTextbox] = useState(false);

    const handleClick = async () => {
        // code goes here for API integration
        setShowTextbox(true);

        try {
            const response = await fetch(audioURL);
            // Realiza aquí la lógica para acceder y trabajar con el archivo de audio
        } catch (error) {
            console.error('Error al acceder al archivo de audio: ', error);
        }



    };

    return (
        <div>
            <button onClick={handleClick}>Transcribe</button>
            <br />
            {showTextbox && (
                <>
                    <p>Audio received</p>
                    <textarea rows="6" cols="60" value={url} />}
                </>
            )}
        </div>

    );
};

TranscribeAudio.propTypes = {
    url: PropTypes.string,
};

export default TranscribeAudio;

