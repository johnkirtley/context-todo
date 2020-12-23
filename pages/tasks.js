
import { useContext, useState, useEffect } from 'react'
import GlobalContext from '../context/GlobalContext'
import Menu from '../components/Menu';

import styles from '../styles/Home.module.css'
import { GenButton } from '../components/Button'
import Task from '../components/Task';
import TotalCompleted from '../components/TotalCompleted'
import TotalLeft from '../components/TotalLeft';



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
                <div className={styles.flex}>
                    <TotalCompleted />
                    <TotalLeft />
                </div>
                <label htmlFor="task" />
                <input className={styles.input} type="text" name="task" value={todo.task} onChange={handleChange} />
                <GenButton text={"Add Task"} theme={"secondary"} method={() => addTask(todo)} />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '4rem', marginTop: '2rem' }}>
                    <div>
                        <h3 style={{ textAlign: 'center' }}>To-Do</h3>
                        {allTasks.map((entry, idx) => {
                            return <Task idx={idx} entry={entry} checkStatus={checkStatus} setTodo={setTodo} />
                        })}
                    </div>
                    <div>
                        <h3 style={{ textAlign: 'center' }}>Completed</h3>
                        {allTasks.map((entry, idx) => {
                            return entry.completed ? <div style={{ display: 'flex', justifyContent: 'space-around' }}><p>{entry.task}</p><p onClick={() => checkStatus(idx)}>Undo</p></div> : ''
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks