import { useState } from "react";

export default function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("X");
  }
  return (
    <button
      onClick={handleClick}
      className="px-2 w-20 h-20 text-xl font-bold border-[0.1rem] border-gray-900"
    >
      {value}
    </button>
  );
}
