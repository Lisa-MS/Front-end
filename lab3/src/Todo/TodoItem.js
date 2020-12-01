import React , {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddind: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },

    input:{
        marginRight: '1rem'
    }
}


 function TodoItem({todo,index, onChange}){
     const {removeTodo} = useContext(Context)
     const classes=[]
     const now = new Date();
     const dueDate = todo.dueDate;
     const dateDifference = dueDate.getTime() - now.getTime();
     const daysLeft = Math.round(dateDifference / (1000 * 3600 * 24));

    if(todo.completed){
        classes.push('done')
    } 

    return (
    <li style={styles.li}>
        <span className={classes.join('')}>
            <input 
             type='checkbox'
             checked={todo.completed} 
             style={styles.input} 
             onChange={() => onChange(todo.id)}/>


            <strong>{index + 1}</strong>
            &nbsp;
            {todo.title}
        </span>
        <span className="dueDate">{dueDate.toLocaleDateString()} {dueDate.toLocaleTimeString()}</span>
        <span className="daysLeft">{daysLeft > 0 ? daysLeft : 0}</span>
        <button className='rm' onClick={removeTodo.bind(null, todo.id)} >&times;</button>   
    </li>
    )
}

TodoItem.ptopTypes ={
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem