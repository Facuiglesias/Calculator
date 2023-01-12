import { Output } from "./Output";
import { Keyboard } from "./Keyboard";
import { useEffect, useState } from "react";
import { Historial } from "./historial";

function Layout() {
  const [outputNums, setOutputNums] = useState(0);
  const [historial, setHistorial] = useState([]);

  return (
    <div className="flex justify-center mt-4">
      <div className="artboard phone-1 bg-neutral drop-shadow-lg rounded-lg">
        <h1 className="text-4xl text-center mt-8 mb-8 tracking-widest font-bold underline decoration-1 underline-offset-[24px]">
          CALCULATOR
        </h1>
        <Historial outputNums={outputNums} />
        <Output outputNums={outputNums} />
        <Keyboard setOutputNums={setOutputNums} outputNums={outputNums} />
      </div>
    </div>
  );
}

export { Layout };
