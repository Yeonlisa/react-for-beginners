
function MinutesToHours() {
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
function KmToMiles() {
    const [distance, setDistance] = React.useState(0);
    const [flipped, setFlipped] = React.useState(false);
    const onChange = (e) => {
        setDistance(e.target.value);
    };
    const reset = () => setDistance(0);
    const onFlip = () => {
        reset();
        setFlipped((current) => !current);
    };
    return (
        <div>
            <div>
                <label htmlFor="kilometer">Kilometer</label>
                <input
                    value={flipped ? Math.round(distance * 0.6) : distance}
                    id="kilometer"
                    placeholder="Kilometers"
                    type="number"
                    disabled={flipped}
                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor="mile">Mile</label>
                <input
                    value={flipped ? distance : Math.round(distance * 1.6)}
                    id="mile"
                    placeholder="Miles"
                    type="number"
                    disabled={!flipped}
                    onChange={onChange}
                />
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={onFlip}>{flipped ? "Turn back" : "Invert"}</button>
        </div>
    );
}
function App() {
    const [index, setIndex] = React.useState("0");
    const onSelect = (e) => {
        setIndex(e.target.value);
    }
    return (
        <div>
            <h1>Super Converter</h1>
            <select value={index} onChange={onSelect}>
                <option value="xx">Select your units</option>
                <option value="0">Minutes & Hours</option>
                <option value="1">Km & Miles</option>
            </select>
            <hr />
            {index === "xx" ? "Please select your units" : null}
            {index === "0" ? <MinutesToHours /> : null}
            {index === "1" ? <KmToMiles /> : null}
        </div>
    );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);