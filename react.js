const root = document.getElementById("root");
let counter = 0;
const countUp = () => {
    counter = counter + 1;
    render()
}
const render = () => {
    ReactDOM.render(<Container />, root);
}
const Container = () => (
    <div>
        <h3>Total clicks: {counter}</h3>
        <button onClick={countUp}>Click me</button>
    </div>
);
render();