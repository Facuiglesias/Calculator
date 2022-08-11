import { Output } from "../Output";
import { Keyboard } from "../Keyboard";
import { useState } from "react";

function App() {
  const [outputNums, setOutputNums] = useState(0);

  return (
    <>
      <h1 className="font-[helvetica] text-accent text-4xl text-center mt-4 tracking-widest font-semibold">
        CALCULATOR
      </h1>
      <Output outputNums={outputNums} />
      <Keyboard setOutputNums={setOutputNums} outputNums={outputNums} />
    </>
  );
}

export default App;
