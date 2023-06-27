import PropTypes from "prop-types";
import React, { useState } from 'react';

export const TranscribeAudio = ({ audioURL }) => {
  const [showTextbox, setShowTextbox] = useState(false);

  const handleClick = async () => {
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
          <p>Yeeeei tenemos audio</p>
          <textarea rows="6" cols="60" readOnly />}
        </>
      )}
    </div>

  );
};

TranscribeAudio.propTypes = {
  audioURL: PropTypes.string.isRequired
};


