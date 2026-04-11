import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Using Redux" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const Todo = {
                id: nanoid(), // Generate unique id
                text: action.payload
            }
            state.todos.push(Todo)
        },

        removeTodo: (state, action) => {
            // Filter out todo matching the given id
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
            const { id, text } = action.payload;

            const todo = state.todos.find((todo) => todo.id === id);

            if (todo) {
                todo.text = text;
            }
        }

    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer