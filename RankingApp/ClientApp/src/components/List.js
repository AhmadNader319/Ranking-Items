import React, { useState, useEffect } from 'react';

const List = () => {
    const [students, setStudents] = useState([]);
    const [newStudentId, setNewStudentId] = useState('');


    const fetchStudents = async () => {
        const response = await fetch('/list');
        const data = await response.json();
        setStudents(data);
    };

    useEffect(() => {
        fetchStudents();
    }, []);
    

    const handleAddStudent = async () => {
            const response = await fetch('/list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: newStudentId })
            });
            const data = await response.json();
            setStudents(prevStudents => [...prevStudents, data]); // Update the state with the newly added student
            setNewStudentId('');

        fetchStudents();
    };

    return (
        <div>
            <h1>List of Students</h1>
            <ul>
                {students.map(student => (
                    <li key={student.id}>{student.id}</li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newStudentId}
                    onChange={e => setNewStudentId(e.target.value)}
                />
                <button onClick={handleAddStudent}>Add Student</button>
            </div>
        </div>
    );
};

export default List;
