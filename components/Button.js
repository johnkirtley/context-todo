import { Button } from 'shards-react'

export const GenButton = (props) => {

    return (
        <Button theme={props.theme} onClick={props.method}>{props.text}</Button>
    )
}