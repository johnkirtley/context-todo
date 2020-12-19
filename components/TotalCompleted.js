import { useContext, useState } from 'react';
import GlobalContext from '../context/GlobalContext';

const TotalCompleted = () => {
    const allTasks = useContext(GlobalContext)

    let num = 0
    allTasks.forEach(item => {
        if (item.completed) {
            num += 1
        }
    })

    return (
        <div>{`Total Completed: ${num}`}</div>
    )
}

export default TotalCompleted;