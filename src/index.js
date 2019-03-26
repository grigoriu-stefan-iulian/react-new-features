import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


const App = (props) => {
    const [count, handleCount] = useState(props.count)

    return (
        <div>
            <p>Count: {count} </p>
            <button onClick={() => handleCount(count + 1)}>Plus One</button>
            <button onClick={() => handleCount(count - 1)}>Minus One</button>
            <button onClick={() => handleCount(props.count)}>Reset</button>
        </div>
    );
};

App.defaultProps = {
    count: 0
}

ReactDOM.render(<App count={0} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
