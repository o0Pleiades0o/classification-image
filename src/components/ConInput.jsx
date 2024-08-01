import React, { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';

function ConInput() {
  const [fileSelected, setFileSelected] = useState(false);
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imageRef = useRef(null);
  const species_dog = ["ปั๊ก", "ไซบีเรียนฮัสกี", "โกลเด้น รีทริฟเวอร์", "ชิวาวา", "ปอมเมอเรเนียน"]

  const loadModel = async () => {
    try {
      const loadedModel = await tf.loadGraphModel('/tfjs_dog_breed_classifier/model.json');
      console.log("Model loaded successfully");
      setModel(loadedModel);
    } catch (error) {
      console.error("Error loading model:", error);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileSelected(true);
      setIsImageLoaded(false);
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

  useEffect(() => {
    console.log("isLoading changed:", isLoading);
  }, [isLoading]);

  const preprocess = (img) => {
    return tf.tidy(() => {
      const tensor = tf.browser.fromPixels(img)
        .resizeNearestNeighbor([224, 224])
        .toFloat()
        .expandDims();
      return tensor.div(127.5).sub(1);
    });
  };

  const handleImageLoad = () => {
    console.log("Image loaded");
    setIsImageLoaded(true);
  };

  const handleClassify = async () => {
    if (!fileSelected || !model || !isImageLoaded || !imageRef.current) {
      console.log("Cannot classify yet:", { fileSelected, modelLoaded: !!model, isImageLoaded, imageRefExists: !!imageRef.current });
      return;
    }

    console.log("Before classification: isLoading =", isLoading);
    setIsLoading(true);
    console.log("After setIsLoading(true): isLoading =", isLoading);

    // Simulate 2 seconds delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      const tensor = preprocess(imageRef.current);
      const prediction = await model.predict(tensor);
      const predictedClass = Array.from(prediction.dataSync());
      setPrediction(predictedClass);
      tensor.dispose();
    } catch (error) {
      console.error('Failed to run model:', error);
    } finally {
      setIsLoading(false);
      console.log("After setIsLoading(false): isLoading =", isLoading);
    }
  };

  const LoadingIndicator = () => (
    <div className="loader flex items-center justify-center">
      <span className="loading loading-spinner loading-md mr-2"></span>
      กำลังวิเคราะห์...
    </div>
  );

  return (
    <div className="container max-w-full flex justify-center pt-36 pb-14 animate__animated animate__fadeInUp">
      <div className="container bg-white shadow-lg text-center rounded-xl p-12 mx-auto">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-3xl font-bold">โปรดเลือกรูปสุนัข</h1>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            onChange={handleFileChange}
            accept="image/*"
          />
          {imageSrc && (
            <img
              ref={imageRef}
              src={imageSrc}
              alt="Selected"
              className="px-4 my-4 max-w-xs"
              onLoad={handleImageLoad}
              style={{ display: isImageLoaded ? 'block' : 'none' }}
            />
          )}
          <button
            className="btn"
            style={{ backgroundColor: fileSelected && isImageLoaded ? '#7F37B4' : '#cccccc', color: 'white' }}
            onClick={handleClassify}
            disabled={!fileSelected || !isImageLoaded || isLoading}
          >
            {!fileSelected
              ? 'กรุณาเลือกไฟล์'
              : isLoading
              ? 'กำลังวิเคราะห์...'
              : isImageLoaded
              ? 'วิเคราะห์รูป'
              : 'กำลังโหลดรูป...'}
          </button>
          
          {isLoading && <LoadingIndicator />}
          
          {!isLoading && prediction.length > 0 && (
            <div>
              {prediction
                .map((pred, index) => ({ pred, index }))
                .sort((a, b) => b.pred - a.pred)
                .slice(0, 5)
                .map(({ pred, index }) => (
                  <div key={index} className="flex items-center mb-2">
                    <p className="w-32 text-left truncate pr-2">{species_dog[index]}</p>
                    <div className='flex-grow flex items-center'>
                      <progress className="progress progress-primary 2xs:w-20 xs:w-60" value={pred} max="1"></progress>
                    </div>
                    <span className="w-16 text-right pl-2">{(pred * 100).toFixed(2)}%</span>
                  </div>
                ))
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConInput;