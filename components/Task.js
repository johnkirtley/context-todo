import { useContext } from 'react';
import { Card, CardBody } from 'shards-react'
import GlobalContext from '../context/GlobalContext'

const Task = (props) => {
    const allTasks = useContext(GlobalContext);

    const entry = props.entry

    const removeTask = (id) => {
        allTasks.splice(id, 1)
        props.setTodo({
            ...props.setTodo
        })
    }

    return (
        <div className={entry.completed ? 'done' : ''}>
            <div className="flex">
                <Card >
                    <CardBody >
                        <p key={props.idx} className={entry.completed ? 'done' : ''} onClick={() => props.checkStatus(props.idx)}>{entry.task}</p>
                    </CardBody>
                </Card>
                <p onClick={() => removeTask(props.idx)}>X</p>
            </div>
        </div>
    )
}

export default Task;