import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) return;

    switch (operator) {
      case '+': setResult(n1 + n2); break;
      case '-': setResult(n1 - n2); break;
      case '*': setResult(n1 * n2); break;
      case '/': setResult(n2 !== 0 ? n1 / n2 : "Can't divide by 0"); break;
      default: break;
    }
  };

  return (
    <div>
      <input type="number" value={num1} onChange={e => setNum1(e.target.value)} />
      <input type="number" value={num2} onChange={e => setNum2(e.target.value)} />
      <div>
        <button onClick={() => calculate('+')}>+</button>
        <button onClick={() => calculate('-')}>-</button>
        <button onClick={() => calculate('*')}>*</button>
        <button onClick={() => calculate('/')}>/</button>
      </div>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default Calculator;
