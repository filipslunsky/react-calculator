import { useState, useEffect } from 'react';
import './Calculator.css';

const Calculator = (props) => {
    const [formVals, setFormVals] = useState({
        heading: "Adding Two Numbers",
        a: 0,
        b: 0,
        operation: "add",
        action: "Add Them!"
    });

    const [inputs, setInputs] = useState({
        a: 0,
        b: 0,
        operation: "add"
    });

    const [result, setResult] = useState();

    const handleFormVals = () => {
        let heading = "";
        let a = 0;
        let b = 0;
        let operation = "add";
        let action = "Add Them!";

        switch (inputs.operation) {
            case "add":
                heading = "Adding Two Numbers";
                a = parseFloat(inputs.a);
                b = parseFloat(inputs.b);
                operation = inputs.operation;
                action = "Add Them!";
                break;
            case "subtract":
                heading = "Subtracting Two Numbers";
                a = parseFloat(inputs.a);
                b = parseFloat(inputs.b);
                operation = inputs.operation;
                action = "Subtract Them!";
                break;
            case "multiply":
                heading = "Multiplying Two Numbers";
                a = parseFloat(inputs.a);
                b = parseFloat(inputs.b);
                operation = inputs.operation;
                action = "Multiply Them!";
                break;
            case "divide":
                heading = "Dividing Two Numbers";
                a = parseFloat(inputs.a);
                b = parseFloat(inputs.b);
                operation = inputs.operation;
                action = "Divide Them!";
                break;
        };
        setFormVals({heading, a, b, operation, action});
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    useEffect(() => {
        handleFormVals();
    }, [inputs]);

    const handleClick = (e) => {
        e.preventDefault();
        if (formVals.operation === "add") {
            setResult(formVals.a + formVals.b)
        } else if (formVals.operation === "subtract") {
            setResult(formVals.a - formVals.b)
        } else if (formVals.operation === "divide" && formVals.b !== 0) {
            setResult(formVals.a / formVals.b)
        } else if (formVals.operation === "multiply") {
            setResult(formVals.a * formVals.b)
        } else {
            setResult('impossible operation')
        }
    };

  return (
    <>
      <div className="main">
        <h1>{formVals.heading}</h1>
        <form>
          <div className="inputs">
            <input onChange={(e) => {handleInput(e)}} type="number" name="a" placeholder="number"/>
            <select onChange={(e) => {handleInput(e)}} name="operation">
              <option value="add">plus (+)</option>
              <option value="subtract">minus (-)</option>
              <option value="multiply">times (x)</option>
              <option value="divide">divided by (/)</option>
            </select>
            <input onChange={(e) => {handleInput(e)}} type="number" name="b" placeholder="number"/>
          </div>
          <div className="controls">
            <button onClick={(e) => {handleClick(e)}}>{formVals.action}</button>
            <p>{result}</p>
          </div>
        </form>
      </div>
    </>
  )
}
 
export default Calculator;