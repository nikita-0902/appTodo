const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const initialState = {
    data: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                data: [...state.data,
                {
                    message: action.message,
                    id: action.id
                }]
            }
        case DELETE_TODO:
            const todos = state.data.filter((todo) => todo.id !== action.id);
            return {
                ...state,
                data: todos
            }
        default:
            return state;
    }
}


export const addTodo = (message) => {
    return {
        type: ADD_TODO,
        message,
        id: Math.random()
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id,
    }
}

export default reducer;