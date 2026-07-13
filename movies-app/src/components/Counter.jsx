import React, {useState} from "react";
export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}></button>
        </div>
    )
}