# react-for-beginners
리액트 작동원리를 VanillaJS로 학습해보았다.

## 바닐라JS 버전
### vanilla.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>react-for-beginners</title>
</head>
<body>
    <span>Total clicks: 0</span>
    <button id="btn">Click me</button>
</body>
<script src="script.js"></script>
</html>
```
### script.js
```js
let counter = 0;
const button = document.getElementById("btn");
const span = document.querySelector("span");

function handleClick() {
    counter = counter + 1;
    span.innerText = `Total clicks: ${counter}`;
}

button.addEventListener("click", handleClick);
```
## 리액트 변환버전
### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>react-for-beginners</title>
</head>
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel" src="react.js"></script>
</html>
```
### react.js
```js
const root = document.getElementById("root");

function App() {
    const [counter, setCounter] = React.useState(0);
    const onClick = () => {
        setCounter((current) => current + 1);
    };
    return (
        <div>
            <h3>Total clicks: {counter}</h3>
            <button onClick={onClick}>Click me</button>
        </div>
    );
}
ReactDOM.render(<App />, root);
```
## Super Converter
### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>react-for-beginners</title>
</head>
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel" src="react.js"></script>
</html>
```
### react.js
```js
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
```
## Btn
### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>react-for-beginners</title>
</head>
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel" src="react.js"></script>
</html>
```
### react.js
```js
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
```
## 느낀점
바닐라JS로도 리액트를 표현할 수 있음을 알게되어 신기했고, 리액트에 관심을 더 갖게되는 계기가 되었다.
