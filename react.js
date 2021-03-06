function Btn({ text, fontSize = 12 }) {
    return (
        <button 
            style={{
                backgroundColor: "tomato",
                color: "white",
                padding: "10px 20px",
                border: 0,
                borderRadius: 10,
                fontSize,
            }}
        >
            {text}
        </button>
    );
}
Btn.propTypes = {
    text: PropTypes.string.isRequired,
    fontSize: PropTypes.number,
};
function App() {
    return (
        <div>
            <Btn text="Save Changes" fontSize={18} />
            <Btn text={"Continue"} />
        </div>
    );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);