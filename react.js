const root = document.getElementById("root");
const span = React.createElement(
    "span", 
    { id: "sexy-span", style: { color: "red" } }, 
    "Hello I'm a span"
);
ReactDOM.render(span, root)