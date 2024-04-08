import React, { useState } from 'react';
import axios from 'axios';
import "../caller.css"
import { useNavigate } from "react-router-dom";
import DescriptionBox from './descriptionbox';
const Form = () => {
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedStrategy, setSelectedStrategy] = useState('');
  const [hoveredButton, setHoveredButton] = useState('');
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Selected Model:', selectedModel);
    console.log('Selected Strategy:', selectedStrategy);
    navigate(`/results/${selectedStrategy}/${selectedModel}`)
  };
  const handleButtonHover = (option) => {
    setHoveredButton(option);
  };
  const handleButtonLeave = () => {
    setHoveredButton('');
  };
  const buttonStyle = {
    backgroundColor: '#f0f0f0',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    margin: '5px',
    cursor: 'pointer',
  };

  const selectedButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#d0d0d0',
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <h3 className='question'>What type of model would you like to use? Choose one:</h3>
          <button
            type="button"
            style={selectedModel === 'LogReg' ? selectedButtonStyle : buttonStyle}
            onClick={() => setSelectedModel('LogReg')}
            onMouseEnter={() => handleButtonHover('LogReg')}
            onMouseLeave={handleButtonLeave}
          >
            Logistic Regression
          </button>
          <button
            type="button"
            style={selectedModel === 'Forest' ? selectedButtonStyle : buttonStyle}
            onClick={() => setSelectedModel('Forest')}
            onMouseEnter={() => handleButtonHover('Forest')}
            onMouseLeave={handleButtonLeave}
          >
            Random Forest
          </button>
          <button
            type="button"
            style={selectedModel === 'XGBoost' ? selectedButtonStyle : buttonStyle}
            onClick={() => setSelectedModel('XGBoost')}
            onMouseEnter={() => handleButtonHover('XGBoost')}
            onMouseLeave={handleButtonLeave}
          >
            XGBoost
          </button>
        </div>
        <div>
          <h3 className='question'>Which trading strategy would you like to use? Choose one:</h3>
          <button
            type="button"
            style={selectedStrategy === 'TopTwo' ? selectedButtonStyle : buttonStyle}
            onClick={() => setSelectedStrategy('TopTwo')}
            onMouseEnter={() => handleButtonHover('TopTwo')}
            onMouseLeave={handleButtonLeave}
          >
            Top Two 
          </button>
          <button
            type="button"
            style={selectedStrategy === 'Binary' ? selectedButtonStyle : buttonStyle}
            onClick={() => setSelectedStrategy('Binary')}
            onMouseEnter={() => handleButtonHover('Binary')}
            onMouseLeave={handleButtonLeave}
          >
            Binary
          </button>
          <button
            type="button"
            style={selectedStrategy === 'Conservative' ? selectedButtonStyle : buttonStyle}
            onClick={() => setSelectedStrategy('Conservative')}
            onMouseEnter={() => handleButtonHover('Conservative')}
            onMouseLeave={handleButtonLeave}
          >
            Conservative
          </button>
        </div>
        <button type="submit">Submit</button>
        
      </form>
      <DescriptionBox className = "option-box" hoveredButton = {hoveredButton}/>
    </div>
  );
};

export default Form;