import { useContext } from 'react';
import { Card, CardBody } from 'shards-react'
import GlobalContext from '../context/GlobalContext'

const Task = (props) => {
    const allTasks = useContext(GlobalContext);

    const entry = props.entry

    const removeTask = (id) => {
        allTasks.splice(id, 1)
        props.setTodo({
            ...allTasks
        })
    }

    return (
        <div className={entry.completed ? 'done' : ''}>
            <div className="flex" style={{ margin: '0.5rem 0' }}>
                <Card >
                    <CardBody>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column' }}>
                            <p key={props.idx} className={entry.completed ? 'done' : ''}>{entry.task}</p>
                            <p onClick={() => props.checkStatus(props.idx)}>Mark as Completed</p>
                            <p onClick={() => removeTask(props.idx)}>Delete</p>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Task;