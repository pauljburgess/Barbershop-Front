import React, { useState } from 'react';

function MyComponent() {
  // State to track if the button is selected
  const [isSelected, setIsSelected] = useState(false);

  // Function to toggle the button's selected state
  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <button
      onClick={toggleSelection}
      className={isSelected ? 'selected' : ''}
    >
      {isSelected ? 'Selected' : 'Select Me'}
    </button>
  );
}

export default MyComponent  