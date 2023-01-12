const Keyboard = ({ outputNums, setOutputNums }) => {
  function printer(value) {
    if (outputNums != "0") {
      setOutputNums((prevOutputNums) => {
        return prevOutputNums + value;
      });
    } else {
      if (value != ".") {
        return setOutputNums(value);
      } else {
        setOutputNums((prevOutputNums) => {
          return prevOutputNums + value;
        });
      }
    }
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
    <div className="grid grid-cols-4 gap-1 px-4">
      <button
        className="btn btn-accent text-white font-bold rounded-md text-xl"
        onClick={() => {
          setOutputNums("0");
        }}
      >
        AC
      </button>
      <button
        className="btn btn-accent text-white font-bold rounded-md-md text-xl"
        onClick={() => {
          negativeValue();
        }}
      >
        +/-
      </button>
      <button
        className="btn btn-accent text-white font-bold rounded-md text-xl"
        onClick={() => {
          printer("%");
        }}
      >
        ％
      </button>
      <button
        className="btn btn-accent rounded text-white font-bold rounded-md text-xl"
        onClick={() => {
          deleteValue();
        }}
      >
        CE
      </button>
      <button
        className="btn btn-secondary text-white font-bold rounded-md text-xl"
        onClick={() => {
          printer("7");
        }}
      >
        7
      </button>
      <button
        className="btn btn-secondary text-white font-bold rounded-md text-xl"
        onClick={() => {
          printer("8");
        }}
      >
        8
      </button>
      <button
        className="btn btn-secondary text-white font-bold rounded-md text-xl"
        onClick={() => {
          printer("9");
        }}
      >
        9
      </button>
      <button
        className="btn btn-primary text-white font-bold rounded-md text-xl"
        onClick={() => {
          printer("/");
        }}
      >
        ÷
      </button>
      <button
        className="btn btn-secondary text-white font-bold rounded-md text-xl"
        onClick={() => {
          printer("4");
        }}
      >
        4
      </button>
      <button
        className="btn btn-secondary text-white font-bold rounded-md text-xl"
        onClick={() => {
          printer("5");
        }}
      >
        5
      </button>
      <button
        className="btn btn-secondary text-white font-bold rounded-md text-xl"
        onClick={() => {
          printer("6");
        }}
      >
        6
      </button>
      <button
        className="btn btn-primary text-white font-bold rounded-md text-xl"
        onClick={() => {
          printer("*");
        }}
      >
        ✕
      </button>
      <button
        className="btn btn-secondary text-white font-bold rounded-md text-xl"
        onClick={() => {
          printer("1");
        }}
      >
        1
      </button>
      <button
        className="btn btn-secondary text-white font-bold rounded-md text-xl"
        onClick={() => {
          printer("2");
        }}
      >
        2
      </button>
      <button
        className="btn btn-secondary text-white font-bold rounded-md text-xl"
        onClick={() => {
          printer("3");
        }}
      >
        3
      </button>
      <button
        className="btn btn-primary text-white font-bold rounded-md text-xl"
        onClick={() => {
          printer("-");
        }}
      >
        ―
      </button>
      <button
        className="btn btn-secondary col-span-2 text-white font-bold rounded-md text-xl"
        onClick={() => {
          printer("0");
        }}
      >
        0
      </button>
      {/* <button
        className="btn btn-primary text-white font-bold rounded-md text-xl"
        onClick={() => {
          // setOperation("^");
          // setValueA(outputNums);
          printer("^");
        }}
        >
        xˣ
      </button> */}
      {/* <button
        className="btn btn-primary text-white font-bold rounded-md text-xl"
        onClick={() => {
          // setOperation("√");
          // setValueA(outputNums);
          printer("√");
        }}
        >
        ˣ√
      </button> */}
      <button
        className="btn btn-secondary text-white font-bold rounded-md text-xl"
        onClick={() => {
          printer(".");
        }}
      >
        ;
      </button>
      <button
        className="btn btn-primary text-white font-bold rounded-md text-xl"
        onClick={() => {
          printer("+");
        }}
      >
        ＋
      </button>
      <button
        className="btn btn-primary text-white font-bold rounded-md text-xl col-span-4"
        onClick={() => {
          const result = eval(outputNums);
          setOutputNums(result);
        }}
      >
        =
      </button>
    </div>
  );
};

export { Keyboard };
