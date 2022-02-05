function Btn({ text, big }) {
    return (
        <button 
            style={{
                backgroundColor: "tomato",
                color: "white",
                padding: "10px 20px",
                border: 0,
                borderRadius: 10,
                fontSize: big ? 18 : 16,
            }}
        >
            {text}
        </button>
    );
}
function App() {
    return (
        <div>
            <Btn text="Save Changes" big={true} />
            <Btn text="Continue" big={false} />
        </div>
    );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);