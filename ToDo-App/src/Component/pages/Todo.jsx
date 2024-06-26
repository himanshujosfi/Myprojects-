import React, { useEffect, useState } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';

const getLocalData = () => {
    let data = localStorage.getItem('todo')
    if (data) {
        return JSON.parse(localStorage.getItem('todo'))
    }
}
const Todo = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState(getLocalData());
    const [toogleIcons, setToggleIcons] = useState(true)
    const [editData, setEditData] = useState(null)

    const generateId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    const handleClick = () => {
        if (!todo) {
            alert('Please enter text');
            return;
        }

        if (toogleIcons) {
            // Add new todo
            const newTodo = { id: generateId(), text: todo };
            setTodos([...todos, newTodo]);
        } else {
            // Edit existing todo
            setTodos(
                todos.map((val) => {
                    if (val.id === editData) {
                        return { ...val, text: todo };
                    }
                    return val;
                })
            );
            setToggleIcons(true);
            setEditData(null);
        }

        setTodo('');
    };

    const handleEdit = (id) => {
        const editItem = todos.find((val) => val.id === id);
        if (editItem) {
            setTodo(editItem.text);  // Set the text to edit
            setToggleIcons(false);   // Switch to edit mode
            setEditData(id);         // Set the ID of the item being edited
        }
    };



    const handleDelete = () => {
        setTodos([]);
    };
    const deleteHandle = (index) => {
        setTodos(todos.filter((elem) => index !== elem.id))
    }
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todos))
    }, [todos]);

    return (
        <>
            <div className='bg-primary-reverse w-4 m-auto mt-8 border-round '>
                <div className='p-4'><h1 className='text-center text-color'>To Do List</h1></div>

                <div className="flex flex-column gap-2 w-8 m-auto text-color font-bold">
                    <label htmlFor=" text-color">Enter Text</label>
                    <div className='mb-2'>
                        <InputText id="username"
                            className='text-center mr-4 '
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                            aria-describedby="username-help" />
                        {

                            <Button
                                icon={toogleIcons ? "pi pi-check" : "pi pi-plus"}
                                className='surface-900'
                                onClick={handleClick}
                            />
                        }

                    </div>
                    {
                        todos.length > 0 && (
                            <ul className='-ml-6'>
                                {todos.map((item) => (
                                    <li key={item.id} className='text-color surface-900 border-round list-none mt-2 flex justify-content-between align-items-center'>
                                        <span className='mr-3 ml-3 text-white-alpha-100'>{item.text}</span>
                                        <div className='flex'>
                                            <p className='pi pi-plus text-end mr-4 cursor-pointer text-primary' onClick={() => handleEdit(item.id)}></p>
                                            <p className='pi pi-times cursor-pointer mr-3 text-red-700' onClick={() => deleteHandle(item.id)}></p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
                    }

                    <div className="card flex flex-wrap justify-content-center gap-3 mb-8">
                        <Button label="Delete All" icon="pi pi-times " className='bg-red-700' onClick={handleDelete} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;
