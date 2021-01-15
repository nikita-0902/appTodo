import React from 'react'
import { connect } from 'react-redux';
import { deleteTodo } from '../Redux/reducer';


import tl from './Todo.module.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FlipMove from 'react-flip-move';


const TodoList = (props, ref) => {

    return (
        <div  className={tl.TodoList}>
            <h1>TodoList</h1>
            <ul>
                <FlipMove>
                    {props.tod.map((todo, index) =>
                        <li key={index}>
                            {todo.message}
                            <IconButton aria-label="delete" color="secondary" onClick={() => props.dispatch(deleteTodo(todo.id))}>
                                <DeleteIcon />
                            </IconButton>
                        </li>

                    )}
                </FlipMove>
            </ul>

        </div>
    )
}

const mapStateToProps = (state) => ({
    tod: state.reducer.data,

})
export default connect(mapStateToProps)(TodoList);
