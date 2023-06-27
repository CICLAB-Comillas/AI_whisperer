// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const TranscribeAudio = ({url}) => {
    const [showTextbox, setShowTextbox] = useState(false);

    function FetchAPI() {
        axios.get("http://localhost:5000/hello")
            .then(response => console.log(response.data))
    }

    const handleClick = () => {
        // code goes here for API integration
        setShowTextbox(true);
        FetchAPI();
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

