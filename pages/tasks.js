
import { useContext, useState } from 'react'
import GlobalContext from '../context/GlobalContext'
import Menu from '../components/Menu';

import styles from '../styles/Home.module.css'
import { GenButton } from '../components/Button'



const Tasks = (props) => {
    const [todo, setTodo] = useState({
        id: Date.now(),
        task: '',
        completed: false
    })
    const allTasks = useContext(GlobalContext)
    console.log(allTasks)
    const handleChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })

        console.log(todo)
    }

    const addTask = (x) => {
        allTasks.push(x)
        console.log(allTasks)

        setTodo({
            ...todo,
            task: '',
            completed: false
        })
    }

    return (
        <div className={styles.container}>
            <Menu />
            <div className={styles.main}>
                <h1>Tasks Page</h1>
                <label htmlFor="task" />
                <input type="text" name="task" value={todo.task} onChange={handleChange} />
                <GenButton text={"Add Task"} theme={"secondary"} method={() => addTask(todo)} />
                {allTasks.length > 0 ? allTasks.map(entry => {
                    console.log('All Tasks', allTasks)
                    return (
                        <p>{entry.task}</p>
                    )
                }) : 'No Tasks'}
            </div>
        </div>
    )
}

export default Tasks