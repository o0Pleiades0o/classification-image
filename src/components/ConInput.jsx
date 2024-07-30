import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

function ConInput() {
  const [fileSelected, setFileSelected] = useState(false);
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const loadModel = async () => {
    try {
      const model = await tf.loadLayersModel('/tfjs_model/model.json');
      setModel(model);
    } catch (error) {
      console.error('Failed to load model:', error);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileSelected(true);
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = async (event) => {
        const img = new Image();
        img.src = event.target.result;
        setImageSrc(event.target.result);
        img.onload = async () => {
          const image = tf.browser.fromPixels(img).resizeNearestNeighbor([224, 224]).expandDims(0).toFloat().div(tf.scalar(255));
          if (model) {
            setIsLoading(true);
            const prediction = model.predict(image);
            setPrediction(prediction.arraySync());
            setIsLoading(false);
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

  const handleClassify = () => {
    if (!fileSelected) return;
    // Classification logic is handled in the FileReader's onload event.
  };

  return (
    <div className="container max-w-full flex justify-center py-10 animate__animated animate__fadeInUp">
      <div className="container bg-white shadow-lg text-center rounded-xl p-12 mx-auto">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-3xl font-bold">เลือกรูปภาพ</h1>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            onChange={handleFileChange}
          />
          {fileSelected ? (
            <button
              className="btn"
              style={{ backgroundColor: '#7F37B4', color: 'white' }}
              onClick={handleClassify}
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z"
                  clipRule="evenodd"
                />
              </svg>
              วิเคราะห์รูป
            </button>
          ) : (
            <button
              className="btn btn-disabled"
              style={{ backgroundColor: '#cccccc', color: 'white' }}
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z"
                  clipRule="evenodd"
                />
              </svg>
              กรุณาเลือกไฟล์
            </button>
          )}
          {isLoading && <div className="loader">Loading...</div>}
          {!isLoading && prediction.length > 0 && (
            <div>
              <img src={imageSrc} alt="Selected" className="mx-auto my-4" />
              {prediction.map((pred, index) => (
                <div key={index} className="flex justify-between items-center">
                  <p>ผลลัพธ์ {index + 1}</p>
                  <progress className="progress progress-primary w-56" value={pred} max="1"></progress>
                  <span>{pred.toFixed(3)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConInput;