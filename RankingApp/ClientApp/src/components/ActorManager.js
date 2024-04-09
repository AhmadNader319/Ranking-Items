import React, { useState, useEffect, useRef } from "react";

const ActorManager = ({ setItems }) => {
  const nameRef = useRef("");
  const ageRef = useRef("");

  const handleAddActor = async () => {
    try {
      const response = await fetch('/rank', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nameRef.current.value,
          age: parseInt(ageRef.current.value)
        })
      });
      const data = await response.json();
      setItems(prevItems => [...prevItems, data]); // Update the state with the newly added actor
      nameRef.current.value = ''; // Clear input fields after adding actor
      ageRef.current.value = '';
    } catch (error) {
      console.error('Error adding actor:', error);
    }
  };

  return (
    <div>
      <h2>Add New Actor</h2>
      <input type="text" placeholder="Name" ref={nameRef} />
      <input type="number" placeholder="Age" ref={ageRef} />
      <button onClick={handleAddActor}>Add Actor</button>
    </div>
  );
};

export default ActorManager;
