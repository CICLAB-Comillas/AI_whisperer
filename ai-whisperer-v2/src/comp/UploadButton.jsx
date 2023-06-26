// Versión 3.0

// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';
import PropTypes from "prop-types";

export const UploadButton = ({tagText = "UPLOAD A FILE", hover }) => {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        const reader = new FileReader();
        reader.onload = () => {
            const fileContent = reader.result;
            // Aquí puedes hacer algo con el contenido del archivo, como mostrarlo en la interfaz de usuario.
            console.log(fileContent);
        };
        reader.readAsText(file);
    };

    return (
            <div>
                <button onClick={handleClick} className="tag">
                    <div className="tag-text">{tagText}</div>
                </button>

                <input
                    ref={fileInputRef}
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                {selectedFile && (
                    <div >
                        <h4>Selected File:</h4>
                        <p className={"fileDisplay"}>{selectedFile.name}</p>
                        {/* <p>Tipo: {selectedFile.type}</p>
                        <p>Tamaño: {selectedFile.size} bytes</p> */}
                    </div>
                )}
            </div>
    );
};

UploadButton.propTypes = {
    text: PropTypes.string,
    tagText: PropTypes.string,
    hover: PropTypes.bool,
};