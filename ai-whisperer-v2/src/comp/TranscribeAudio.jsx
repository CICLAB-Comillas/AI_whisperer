import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export const TranscribeAudio = ({ audioURL }) => {
  const [showTextbox, setShowTextbox] = useState(false);

  const handleClick = () => {
    setShowTextbox(true);


    const [transcript, setTranscript] = useState('');

    useEffect(() => {
    const fetchAudioFile = async () => {
      try {
        const response = await fetch(audioURL);
        const audioBlob = await response.blob();

        const audioContext = new AudioContext();
        const audioSource = audioContext.createBufferSource();

        const arrayBuffer = await audioBlob.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        audioSource.buffer = audioBuffer;
        audioSource.connect(audioContext.destination);
        audioSource.start();

        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'es-ES'; // Establece el idioma para el reconocimiento de voz
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
          const result = event.results[0][0].transcript;
          setTranscript(result);
        };

        recognition.onerror = (event) => {
          console.error('Error en el reconocimiento de voz: ', event.error);
        };

        recognition.onend = () => {
          console.log('Reconocimiento de voz finalizado.');
        };

        recognition.start();
      } catch (error) {
        console.error('Error al cargar el archivo de audio: ', error);
      }
    };

    fetchAudioFile();
    }, []);

    return (
    <div>
      <h3>Texto transcrito:</h3>
      <p>{transcript}</p>
    </div>
    );
    };



  };



TranscribeAudio.propTypes = {
  audioURL: PropTypes.string.isRequired
};



