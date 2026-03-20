import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch() //Dispatch uses a reducer to change in store

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form
            onSubmit={addTodoHandler}
            className="mt-8 flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-3 shadow-lg sm:flex-row sm:items-center"
        >
            <input
                type="text"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                placeholder="Enter a todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                type="submit"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-indigo-500 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo
