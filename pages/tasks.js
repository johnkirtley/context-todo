
import { useContext, useState, useEffect } from 'react'
import GlobalContext from '../context/GlobalContext'
import Menu from '../components/Menu';

import styles from '../styles/Home.module.css'
import { GenButton } from '../components/Button'
import Task from '../components/Task';
import TotalCompleted from '../components/TotalCompleted'



const Tasks = (props) => {
    const [todo, setTodo] = useState({
        id: Date.now(),
        task: '',
        completed: false
    })

    const allTasks = useContext(GlobalContext)


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

    const checkStatus = (id) => {
        let target = allTasks[id]

        target.completed = !target.completed

        setTodo({
            ...todo
        })

        console.log(target)
    }

    return (
        <div className={styles.container}>
            <Menu />
            <div className={styles.main}>
                <h1>Tasks Page</h1>
                <TotalCompleted />
                <label htmlFor="task" />
                <input type="text" name="task" value={todo.task} onChange={handleChange} />
                <GenButton text={"Add Task"} theme={"secondary"} method={() => addTask(todo)} />
                {allTasks.map((entry, idx) => {
                    return <Task idx={idx} entry={entry} checkStatus={checkStatus} setTodo={setTodo} />
                })}
            </div>
            <div>
                <h3>Completed</h3>
                {allTasks.map((entry, idx) => {
                    return entry.completed ? <p onClick={() => checkStatus(idx)}>{entry.task}</p> : ''
                })}
            </div>
        </div>
    )
}

export default Tasks