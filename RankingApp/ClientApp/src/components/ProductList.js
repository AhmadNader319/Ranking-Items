import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [newItemName, setNewItemName] = useState('');
    const [newItemPrice, setNewItemPrice] = useState('');

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

    const handleAddItem = async () => {
        try {
            const response = await fetch('/api/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: newItemName,
                    price: parseFloat(newItemPrice)
                })
            });

            if (!response.ok) {
                throw new Error('Failed to add item');
            }

            const data = await response.json();
            setItems(prevItems => [...prevItems, data]); // Update the state with the newly added item
            setNewItemName('');
            setNewItemPrice('');
        } catch (error) {
            console.error('Error adding item:', error);
        }
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
                    {items.map(item => (
                        <tr key={item.id} onClick={() => handleRowClick(item)}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
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
            <div>
                <h2>Add New Item</h2>
                <input type="text" value={newItemName} onChange={e => setNewItemName(e.target.value)} placeholder="Name" />
                <input type="text" value={newItemPrice} onChange={e => setNewItemPrice(e.target.value)} placeholder="Price" />
                <button onClick={handleAddItem}>Add Item</button>
            </div>
        </div>
    );
};

export default ProductList;
