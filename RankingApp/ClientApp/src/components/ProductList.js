// ProductList.js
import React, { useState, useEffect } from 'react';

const ProductList = () => {
            const [items, setItems] = useState([]);
        const [selectedItem, setSelectedItem] = useState(null);

        useEffect(() => {
            const fetchItems = async () => {
            try {
                const response = await fetch('/api/product'); // Fetch data from the product endpoint
                const data = await response.json();
                setItems(data);
                
                // Select the first item from the fetched data
                if (data.length > 0) {
                setSelectedItem(data[0]);
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

        return (
            <div>
            <h1>Items Table</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {selectedItem && ( // Check if selectedItem is not null
                    <tr key={selectedItem.id} onClick={() => handleRowClick(selectedItem)}>
                    <td>{selectedItem.id}</td>
                    <td>{selectedItem.name}</td>
                    <td>{selectedItem.price}</td>
                    </tr>
                )}
                </tbody>
            </table>
            {selectedItem && (
                <div>
                <h2>Selected Item</h2>
                <p>ID: {selectedItem.id}</p>
                <p>Name: {selectedItem.name}</p>
                <p>Price: {selectedItem.price}</p>
                </div>
            )}
            </div>
        );
};

export default ProductList;
