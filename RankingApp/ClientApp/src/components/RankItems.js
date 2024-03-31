// RankItems.jsx

import React, { useState, useEffect } from 'react';
import './rankItemsStyles.css'; // Import the CSS file

const RankItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('/item');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
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
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.ranking}</td>
              <td>{item.itemType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankItems;
