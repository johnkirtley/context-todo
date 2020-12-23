
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext'

const TotalLeft = () => {
    const allTasks = useContext(GlobalContext)

    let num = 0;
    allTasks.forEach(task => {
        if (!task.completed) {
            num += 1
        }
    })

    return <p>{`Total Left: ${num}`}</p>
}

export default TotalLeft;