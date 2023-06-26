    import './App.css'
    import { UploadButton } from "./comp/UploadButton.jsx";
    import { useState } from "react";
    // eslint-disable-next-line no-unused-vars
    import React from "react";
    import AudioRecorder from "./comp/AudioRecorder.jsx";
    import Buttons from "./comp/Buttons.jsx";
    import Transcribe from "./comp/Transcribe.jsx"

    function App() {
        const [audio, setAudio] = useState(null);
        const [file, setFile] = useState(null);
        const handleAudioUpdate = (newAudio) => {
            setAudio(newAudio);
        };
        const handleFileUpdate = (newFile) => {
          setFile(newFile);
        };


        return (
            <>
              <div>
                <a href="https://github.com/CICLAB-Comillas" target="_blank" rel="noreferrer">
                  <img src="src/assets/logo-ciclab.png" className="logo ciclab" alt="CICLAB logo" />
                </a>
              </div>
              <h1>AI whisperer v2</h1>
              <h2>LLM powered voice transcription</h2>
              <h5>by:
                <br /> A. Gómez, M. Hervás
                <br /> M. Liz, A. Quintana
              </h5>
              <div className="card">
                <UploadButton onFileUpload={handleFileUpdate}/>
                  {file && <div>
                      <a download href={file}>
                          Succesfully uploaded file...
                      </a>
                      <Transcribe />
                      <a>Options:</a>
                      <Buttons />
                  </div>}

                <a>or</a>
                <AudioRecorder onAudioUpdate={handleAudioUpdate}/>
                  {audio && <div>
                      <a download href={audio}>
                          Download Recording
                      </a>
                      <Transcribe />
                      <a>Options:</a>
                      <Buttons />
                  </div>}

              </div>
              <p className="read-the-docs">
                Please, only upload a .mp4 file with the audio you want to see transcribed to text.
              </p>
              <p className="read-the-docs">
                To learn more click on the CICLAB logo or visit {'https://github.com/CICLAB-Comillas'}
              </p>
            </>
      )
}

export default App
