const root = document.getElementById("root");

function App() {
    const [minutes, setMinutes] = React.useState();
    const onChange = (e) => {
        setMinutes(e.target.value);
    };
    return (
        <div>
            <h1 className="hi">Super Converter</h1>
            <label htmlFor="minutes">Minutes</label>
            <input 
                value={minutes} 
                id="minutes" 
                placeholder="Minutes" 
                type="number"
                onChange={onChange}
            />
            <h4>You want to convert {minutes}</h4>
            <label htmlFor="hours">Hours</label>
            <input id="hours" placeholder="Hours" type="number" />
        </div>
    );
}

ReactDOM.render(<App />, root);