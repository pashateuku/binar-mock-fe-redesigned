import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { nanoid } from 'nanoid';

export const getTodosAsync = createAsyncThunk(
	'todos/getTodosAsync',
	async (payload) => {
        const res = await axios.get(`https://todo-binar-api.fly.dev/todo/${payload.id}`)
            const todosData = await res
            const todos = todosData.data.data.todo_data
            console.log(todos)
            return { todos }
	}
);

export const deleteTodoAsync = createAsyncThunk(
	'todos/deleteTodoAsync',
	async (payload) => {
        await axios.post(`https://todo-binar-api.fly.dev/todo/delete/${payload.id}`)
        return { id: payload.id };
	}
);

export const addTodoAsync = createAsyncThunk(
	'todos/addTodoAsync',
	async (payload) => {
        const res = await axios.post('https://todo-binar-api.fly.dev/todo/create', {
            foreign_id: payload.foreign_id,
            todo_id: nanoid(),
            desc: payload.title,
        });
            const todosData = await res
            const todos = todosData.data.data
            return { todos }

        
	}
);

export const toggleTodoAsync = createAsyncThunk(
	'todos/toggleTodoAsync',
	async (payload) => {
        await axios.post(`https://todo-binar-api.fly.dev/todo/toggle/${payload.todo_id}`, {
            status: payload.reverseStatus
        });
        return { 
			todo_id: payload.todo_id,
			status: payload.reverseStatus
		};
	}
);


export const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			const todo = {
                todo_id: nanoid(),
				desc: action.payload.title,
				status: false,
			};
			state.push(todo);
		},
		toggleTodo: (state, action) => {
        	const index = state.findIndex((todo) => todo.todo_id === action.payload.todo_id);
			console.log('ini Reducer Standar')
        	state[index].status = action.payload.reverseStatus;
		},
		deleteTodo: (state, action) => {
			return state.filter((todos) => todos.todo_id !== action.payload.id);
		},
	},
	extraReducers: {
		[getTodosAsync.fulfilled]: (state, action) => {
			return action.payload.todos;
		},
		[addTodoAsync.fulfilled]: (state, action) => {
			state.push(action.payload.todos);
		},
		[toggleTodoAsync.fulfilled]: (state, action) => {
			const index = state.findIndex(
				(todos) => todos.todo_id === action.payload.todo_id
			);
			console.log('ini extraReducer')
			state[index].status = action.payload.status;
		},
		[deleteTodoAsync.fulfilled]: (state, action) => {
			console.log(action.payload.id)
			return state.filter((todos) => todos.todo_id !== action.payload.id);
		},
	},
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;