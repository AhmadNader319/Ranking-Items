import React, { useState, useEffect } from 'react';
import './rankItemsStyles.css'; // Import the CSS file

const RankItems = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedFirstItem, setSelectedFirstItem] = useState(null);
  const [inputId, setInputId] = useState('');
  const [requestedItem, setRequestedItem] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/rank');
        const data = await response.json();
        setItems(data);

        // Select the first item from the fetched data and set it in state
        if (data.length > 0) {
          setSelectedFirstItem(data[1]); // You can change this to select any specific item initially
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems();
  }, []);

  const handleRowClick = (item) => {
    setSelectedItem(item);
  };

  const handleInputChange = (e) => {
    setInputId(e.target.value);
  };

  const handleButtonClick = () => {
    const id = parseInt(inputId);
    const foundItem = items.find(item => item.id === id);
    if (foundItem) {
      setRequestedItem(foundItem);
    } else {
      setRequestedItem(null);
      alert('Item not found!');
    }
  };

  return (
    <div>
      <h1>Items Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Ranking</th>
            <th>Item Type</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} onClick={() => handleRowClick(item)}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.ranking}</td>
              <td>{item.itemType}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedItem && (
        <div>
          <h2>Selected Item</h2>
          <p>ID: {selectedItem.id}</p>
          <p>Title: {selectedItem.title}</p>
          <p>Ranking: {selectedItem.ranking}</p>
          <p>Item Type: {selectedItem.itemType}</p>
        </div>
      )}
      {selectedFirstItem && (
        <div>
          <h2>Item {selectedFirstItem.id}</h2>
          <p>ID: {selectedFirstItem.id}</p>
          <p>Title: {selectedFirstItem.title}</p>
          <p>Ranking: {selectedFirstItem.ranking}</p>
          <p>Item Type: {selectedFirstItem.itemType}</p>
        </div>
      )}
      <div>
        <input type="text" value={inputId} onChange={handleInputChange} placeholder="Enter ID" />
        <button onClick={handleButtonClick}>Show Item</button>
      </div>
      {requestedItem && (
        <div>
          <h2>Requested Item</h2>
          <p>ID: {requestedItem.id}</p>
          <p>Title: {requestedItem.title}</p>
          <p>Ranking: {requestedItem.ranking}</p>
          <p>Item Type: {requestedItem.itemType}</p>
        </div>
      )}
    </div>
  );
};

export default RankItems;
