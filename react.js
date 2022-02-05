const root = document.getElementById("root");

function App() {
    const [minutes, setMinutes] = React.useState(0);
    const onChange = (e) => {
        setMinutes(e.target.value);
    };
    const reset = () => setMinutes(0);
    return (
        <div>
            <h1>Super Converter</h1>
            <div>
                <label htmlFor="minutes">Minutes</label>
                <input 
                    value={minutes} 
                    id="minutes" 
                    placeholder="Minutes" 
                    type="number"
                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor="hours">Hours</label>
                <input 
                    value={Math.round(minutes / 60)} 
                    id="hours" 
                    placeholder="Hours" 
                    type="number"
                    disabled 
                />
            </div>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

ReactDOM.render(<App />, root);