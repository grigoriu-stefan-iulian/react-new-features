import React, { useEffect, useState } from 'react'

const App = (props) => {
    const [count, setCount] = useState(props.count)
    const [text, setText] = useState(props.text)
//this is a mirror of componentDidMount()
    useEffect(() => {
        log('Only runs once.')
    }, [])

    useEffect(() => {
        document.title = `${text}: ${count}`
    }, [text, count])
    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <p>{text}: {count} </p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(props.count)}>Reset</button>
        </div>
    )
}

App.defaultProps = {
    count: 0,
    text: 'Count'
}