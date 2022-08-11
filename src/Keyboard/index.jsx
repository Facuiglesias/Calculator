import { useState } from "react";

const Keyboard = ({ outputNums, setOutputNums }) => {
  const [valueA, setValueA] = useState(0);
  const [operation, setOperation] = useState("");

  function printer(value) {
    setOutputNums((prevOutputNums) => {
      return parseFloat(prevOutputNums.toString() + value.toString());
    });
  }
  function deleteValue() {
    if (outputNums > 0) return setOutputNums(Math.floor(outputNums / 10));
    if (outputNums < 0) return setOutputNums(Math.ceil(outputNums / 10));
    return setOutputNums(0);
  }
  function negativeValue() {
    setOutputNums(outputNums * -1);
  }

  return (
    <div className="grid grid-cols-4 gap-4 px-4">
      <button
        className="btn btn-primary text-black"
        onClick={() => {
          negativeValue();
        }}
      >
        +/-
      </button>
      <button
        className="btn btn-primary text-black text-xl"
        onClick={() => {
          setOperation("%");
          setValueA(outputNums);
          setOutputNums(0);
        }}
      >
        %
      </button>
      <button
        className="btn btn-primary text-black text-xl"
        onClick={() => {
          setOperation("/");
          setValueA(outputNums);
          setOutputNums(0);
        }}
      >
        /
      </button>
      <div className="grid grid-cols-2 gap-4">
        <button
          className="btn btn-neutral text-black text-xl"
          onClick={() => {
            deleteValue();
          }}
        >
          CE
        </button>
        <button
          className="btn btn-neutral text-black text-xl"
          onClick={() => {
            setOutputNums(0);
          }}
        >
          C
        </button>
      </div>
      <button
        className="btn btn-primary text-black text-xl"
        onClick={() => {
          printer(7);
        }}
      >
        7
      </button>
      <button
        className="btn btn-primary text-black text-xl"
        onClick={() => {
          printer(8);
        }}
      >
        8
      </button>
      <button
        className="btn btn-primary text-black text-xl"
        onClick={() => {
          printer(9);
        }}
      >
        9
      </button>
      <button
        className="btn btn-primary text-black text-xl"
        onClick={() => {
          setOperation("x");
          setValueA(outputNums);
          setOutputNums(0);
        }}
      >
        x
      </button>
      <button
        className="btn btn-primary text-black text-xl"
        onClick={() => {
          printer(4);
        }}
      >
        4
      </button>
      <button
        className="btn btn-primary text-black text-xl"
        onClick={() => {
          printer(5);
        }}
      >
        5
      </button>
      <button
        className="btn btn-primary text-black text-xl"
        onClick={() => {
          printer(6);
        }}
      >
        6
      </button>
      <button
        className="btn btn-primary text-black text-xl"
        onClick={() => {
          setOperation("-");
          setValueA(outputNums);
          setOutputNums(0);
        }}
      >
        -
      </button>
      <button
        className="btn btn-primary text-black text-xl"
        onClick={() => {
          printer(1);
        }}
      >
        1
      </button>
      <button
        className="btn btn-primary text-black text-xl"
        onClick={() => {
          printer(2);
        }}
      >
        2
      </button>
      <button
        className="btn btn-primary text-black text-xl"
        onClick={() => {
          printer(3);
        }}
      >
        3
      </button>
      <button
        className="btn btn-primary text-black text-xl"
        onClick={() => {
          setOperation("+");
          setValueA(outputNums);
          setOutputNums(0);
        }}
      >
        +
      </button>
      <button
        className="btn btn-primary text-black text-xl"
        onClick={() => {
          printer(0);
        }}
      >
        0
      </button>
      <button
        className="btn btn-primary text-black text-xl"
        onClick={() => {
          setOperation("^");
          setValueA(outputNums);
          setOutputNums(0);
        }}
      >
        x^
      </button>
      <button
        className="btn btn-primary text-black text-xl"
        onClick={() => {
          setOperation("√");
          setValueA(outputNums);
          setOutputNums(0);
        }}
      >
        √x
      </button>
      {/* <button
        className="btn btn-primary text-black"
        onClick={() => {
          printer(".");
          console.log(outputNums);
        }}
      >
        .
      </button> */}
      <button
        className="btn btn-accent text-black text-xl"
        onClick={() => {
          if (operation == "+") {
            let resultado = valueA + outputNums;
            return setOutputNums(resultado);
          } else if (operation == "-") {
            let resultado = valueA - outputNums;
            return setOutputNums(resultado);
          } else if (operation == "x") {
            let resultado = valueA * outputNums;
            return setOutputNums(resultado);
          } else if (operation == "/") {
            let resultado = valueA / outputNums;
            return setOutputNums(resultado);
          } else if (operation == "%") {
            let resultado = (valueA * outputNums) / 100;
            return setOutputNums(resultado);
          } else if (operation == "^") {
            let resultado = Math.pow(valueA, outputNums);
            return setOutputNums(resultado);
          } else if (operation == "√") {
            let resultado = Math.pow(valueA, 1 / outputNums);
            return setOutputNums(Math.ceil(resultado));
          }
        }}
      >
        =
      </button>
    </div>
  );
};

export { Keyboard };
