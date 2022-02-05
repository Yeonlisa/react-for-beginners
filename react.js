const root = document.getElementById("root");
const h3 = React.createElement(
    "h3", 
    {
        id: "title",
        onMouseEnter: () => console.log('mouse enter'),
    }, 
    "Hello I'm a span"
);
const btn = React.createElement(
    "button", 
    {
        onClick: () => console.log('im clicked'),
        style: {
            backgroundColor: "tomato",
        },
    }, 
    "Click me"
);
const container = React.createElement("div", null, [h3, btn])
ReactDOM.render(container, root);