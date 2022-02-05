const root = document.getElementById("root");

function App() {
    const [amount, setAmount] = React.useState(0);
    const [inverted, setInverted] = React.useState(false);
    const onChange = (e) => {
        setAmount(e.target.value);
    };
    const reset = () => setAmount(0);
    const onInvert = () => {
        reset();
        setInverted((current) => !current);
    };
    return (
        <div>
            <h1>Super Converter</h1>
            <div>
                <label htmlFor="minutes">Minutes</label>
                <input 
                    value={inverted ? amount * 60 : amount} 
                    id="minutes" 
                    placeholder="Minutes" 
                    type="number"
                    onChange={onChange}
                    disabled={inverted}
                />
            </div>
            <div>
                <label htmlFor="hours">Hours</label>
                <input 
                    value={inverted ? amount : Math.round(amount / 60)} 
                    id="hours" 
                    placeholder="Hours" 
                    type="number"
                    onChange={onChange}
                    disabled={!inverted}
                />
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
        </div>
    );
}

ReactDOM.render(<App />, root);