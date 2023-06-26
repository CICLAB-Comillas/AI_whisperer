import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export const TranscribeAudio = ({ audioURL }) => {
  const [showTextbox, setShowTextbox] = useState(false);

  const handleClick = () => {
    setShowTextbox(true);

    // try {
    //   const response = await fetch(audioURL);
    //   // Realiza aquí la lógica para acceder y trabajar con el archivo de audio
    //   setText('Audio recibido');
    // } catch (error) {
    //   console.error('Error al acceder al archivo de audio: ', error);
    // }

  };
  g

  TranscribeAudio.propTypes = {
    audioURL: PropTypes.string.isRequired
  };

  return (
    <div>
      <button onClick={handleClick}>Transcribe</button>
      <br />
      {/* <textarea value={text} readOnly /> */}
      <br />
      {showTextbox && <textarea rows="6" cols="60" />}

    </div>

  );
};

