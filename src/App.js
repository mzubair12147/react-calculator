import { useState } from "react";
import "./App.css";
import Input from "./components/DisplayBar";
import ButtonContainer from "./components/ButtonContainer";
import Button from "./components/Button";
import ClearDisplayBar from "./components/ClearDisplayBar";
import ErrorPopUp from "./components/ErrorPopUp";

function evaluate(expression) {
    // eslint-disable-next-line no-eval
    return eval(expression);
}

function App() {
    const [expression, setExpression] = useState("");
    const [showPopUp, setShowPopUp] = useState(false);
    const [message, setMessage] = useState("");
    function handleClearExpression() {
        setExpression("");
    }

    function handleClick(e) {
        if (!e.target.classList.contains("btn")) return;
        if (e.target.textContent !== "=") {
            setExpression((expression) =>
                expression.concat(e.target.textContent)
            );
            console.log(e.target.textContent);
        } else if (e.target.textContent === "=") {
            try {
                const result = "" + evaluate(expression);
                setExpression(result);
            } catch (e) {
                if ((e.name = "SyntaxError")) {
                    setMessage("Syntax Error: Correct the Syntax");
                    setShowPopUp(true);
                }
            }
        }
    }

    function handleClosePopUp() {
        setShowPopUp(false);
        setExpression("");
    }

    return (
        <>
            {showPopUp && (
                <ErrorPopUp message={message} onClosePopUP={handleClosePopUp} />
            )}
            <div className="app">
                <ClearDisplayBar onClearExpression={handleClearExpression} />
                <Input expression={expression} />
                <ButtonContainer handleClick={handleClick}>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>+</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>-</Button>
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>
                    <Button>*</Button>
                    <Button>0</Button>
                    <Button>.</Button>
                    <Button>=</Button>
                    <Button>/</Button>
                </ButtonContainer>
            </div>
        </>
    );
}

export default App;
