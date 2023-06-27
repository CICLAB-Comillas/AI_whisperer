// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TranscribeAudio = ({url}) => {
    const [showTextbox, setShowTextbox] = useState(false);

    const handleClick = () => {
        // code goes here for API integration
        setShowTextbox(true);

    };

    return (
        <div>
            <button onClick={handleClick}>Transcribe</button>
            <br />
            {showTextbox && <textarea rows="4" cols="50" value={url}/>}
        </div>
    );
};

TranscribeAudio.propTypes = {
    url: PropTypes.string,
};

export default TranscribeAudio;

