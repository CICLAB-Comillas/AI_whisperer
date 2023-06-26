import React, { useState } from 'react';

const TranscribeAudio = () => {
    const [showTextbox, setShowTextbox] = useState(false);

    const handleClick = () => {
        setShowTextbox(true);
    };

    return (
        <div>
            <button onClick={handleClick}>Transcribe</button>
            <br />
            {showTextbox && <textarea rows="4" cols="50" />}
        </div>
    );
};

export default TranscribeAudio;

