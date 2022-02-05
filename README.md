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
        setCounter(counter + 1);
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
## 느낀점
바닐라JS로도 리액트를 표현할 수 있음을 알게되어 신기했고, 리액트에 관심을 더 갖게되는 계기가 되었다.
