function Btn({ text, onClick }) {
    return (
        <button 
            onClick={onClick}
            style={{
                backgroundColor: "tomato",
                color: "white",
                padding: "10px 20px",
                border: 0,
                borderRadius: 10,
            }}
        >
            {text}
        </button>
    );
}
const MemorizedBtn = React.memo(Btn);
function App() {
    const [value, setValue] = React.useState("Save Changes");
    const changeValue = () => setValue("Revert Changes");
    return (
        <div>
            <MemorizedBtn text={value} onClick={changeValue} />
            <MemorizedBtn text="Continue" />
        </div>
    );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);