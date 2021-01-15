import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Redux/reducer';

import ti from './Todo.module.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));
function TodoInput(props) {
    const classes = useStyles();

    return (
        <div className={ti.TodoInput}>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    let input = event.target.userInput.value;
                    props.dispatch(addTodo(input));
                    event.target.userInput.value = "";
                }}
            >
                <input type="text" name="userInput" placeholder="Add your list..." required />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                >
                    Add
                </Button>
            </form>
        </div >
    )
}

export default connect()(TodoInput); 
