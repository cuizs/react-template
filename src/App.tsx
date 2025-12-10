import type { FooParams } from "types";

import viteLogo from "/vite.svg";
import "./App.css";

import { useEffect } from "react";

function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {}, []);
    const foo = (cart: FooParams) => {
        if (cart.items && cart.items[0] && cart.items[0].quantity === 0)
            setCount(0);
    };

    let a = 0;
    const foo2 = () => {
        if (a === 1) a++;
        else return 1;
        return false;
    };

    foo2();
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <button
                className="vertify"
                onClick={() => {
                    foo({});
                }}
            >
                Break the world
            </button>
            <AntButton>ceshi</AntButton>
            <AntCheckbox>Checkbox</AntCheckbox>
        </>
    );
}

export default App;
