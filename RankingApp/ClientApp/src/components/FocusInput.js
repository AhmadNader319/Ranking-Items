import React, { useRef, useState } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const [output, setOutput] = useState('');

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleButtonClick = () => {
    // Check if inputRef.current is not null before performing operations
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      
      const outputValue = `Input value: ${inputValue}`;
      console.log(outputValue);
      
      setOutput(outputValue);
      
      inputRef.current.value = '';
      
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Focus Input Example</h2>
      <input 
        type="text" 
        ref={inputRef} 
        value={value} 
        onChange={handleInputChange} 
        placeholder="Enter something..."
      />
      <button onClick={handleButtonClick}>Perform Operations</button>
      <div>{output}</div>
    </div>
  );
};

export default FocusInput;
