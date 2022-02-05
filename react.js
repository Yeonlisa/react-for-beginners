const root = document.getElementById("root");
function App() {
    const [counter, modifier] = React.useState(0);
    return (
        <div>
            <h3>Total clicks: {counter}</h3>
            <button>Click me</button>
        </div>
    );
}
ReactDOM.render(<App />, root);