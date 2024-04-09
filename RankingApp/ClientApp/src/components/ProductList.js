import React, { useState, useEffect, useRef} from 'react';

const ProductList = () => {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [newItemName, setNewItemName] = useState('');
    const [newItemPrice, setNewItemPrice] = useState('');
    const itemName = useRef("");
    const itemPrice = useRef("");

    const addItem = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: itemName.current.value,
                    price: itemPrice.current.value
                })
            });

            if (!response.ok) {
                throw new Error('Failed to add item');
            }

            const data = await response.json();
            console.log(JSON.stringify(data));

            setItems(prevItems => [...prevItems, data]);
            // Clear input fields after successful submission
            itemName.current.value = '';
            itemPrice.current.value = '';

        } catch (error) {
            console.error('Error adding item:', error);
        }
    };/* 
    const handleAddItem = async () => {
        try {
            const response = await fetch('/api/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: newItemName,
                    price: newItemPrice
                })
            });

            if (!response.ok) {
                throw new Error('Failed to add item');
            }

            const data = await response.json();
            
            console.log(JSON.stringify(data));
            
            setItems(prevItems => [...prevItems, data]);// Update the state with the newly added item
            
            console.log(JSON.stringify(data));
            
            
            setNewItemName('');
            setNewItemPrice('');
        } catch (error) {
            console.error('Error adding item:', error);
        }
    }; */


    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('/api/product'); // Fetch data from the product endpoint
                const data = await response.json();
                setItems(data);
                console.log(JSON.stringify(data));
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
            {/* <div>
                <h3>Add New Item</h3>
                <input type="text" value={newItemName} onChange={e => setNewItemName(e.target.value)} placeholder="Name" />
                <input type="text" value={newItemPrice} onChange={e => setNewItemPrice(e.target.value)} placeholder="Price" />
                <button onClick={handleAddItem}>Add Item</button>
            </div> */}
            <form onSubmit={(e) => { addItem(e) }}>

            <label>Item Name: </label>
            <input type="text" className="form-control" ref={itemName} />

            <label>Item Price: </label>
            <input type="text" className="form-control" ref={itemPrice} />

            <button type="submit" className="btn btn-primary">Add Item</button>
            </form>
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
           
        </div>
    );
};

export default ProductList;
