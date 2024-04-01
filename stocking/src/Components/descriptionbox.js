
import React, { useState,useEffect } from 'react';
const DescriptionBox = ({ hoveredButton }) => {
  const [description, setDescription] = useState('');
  useEffect(() => {
    // Update description based on the hovered button
    if (hoveredButton === 'LogReg') {
      setDescription('Logistic Regression: Fits a logistic curve to the data, which allows it to predict the probability of the outcome occurring.');
    } else if (hoveredButton === 'XGBoost') {
      setDescription('XGBoost: Gradient boosting is an approach where new models are created that predict the residuals or errors of prior models and then added together to make the final prediction.');
    } else if (hoveredButton === 'Forest') {
      setDescription('Random Forest: Utilizes a collection of decision trees, where each tree makes its prediction independently, and the final prediction is determined by a majority vote of the individual tree predictions.');
    } else if (hoveredButton === 'TopTwo') {
        setDescription('Takes the two stocks most likely to go up in value over the next two weeks');
    } else if (hoveredButton === 'Binary') {
        setDescription('Takes any stock predicted to go up in value over the next two weeks');
    } else if (hoveredButton === 'Conservative') {
        setDescription('Takes the single stock most likely to go up in value over the next two weeks');
    } 
    else {
      setDescription('');
    }
  }, [hoveredButton]);
  return (
    <div className="option-box">
        
      {hoveredButton ? <div>{description}</div> : null}
    </div>
  );
};

export default DescriptionBox;