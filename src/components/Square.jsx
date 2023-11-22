import { useState } from "react";

export default function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("X");
  }
  return (
    <button
      onClick={handleClick}
      className="w-20 h-20 text-2xl flex-shrink-0 border-2 border-gray-900"
    >
      {value}
    </button>
  );
}
