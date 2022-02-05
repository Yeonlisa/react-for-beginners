const root = document.getElementById("root");
const Title = (
    <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
        Hello I'm a title
    </h3>
);
// const h3 = React.createElement(
//     "h3", 
//     {
//         id: "title",
//         onMouseEnter: () => console.log('mouse enter'),
//     }, 
//     "Hello I'm a title"
// );
const Button = (
    <button 
        style={{
            backgroundColor: "tomato",
        }} 
        onClick={() => console.log("im clicked")}
    >
        Click me
    </button>
);
// const btn = React.createElement(
//     "button", 
//     {
//         onClick: () => console.log('im clicked'),
//         style: {
//             backgroundColor: "tomato",
//         },
//     }, 
//     "Click me"
// );
// const container = React.createElement("div", null, [h3, btn])
const container = React.createElement("div", null, [Title, Button])
ReactDOM.render(container, root);