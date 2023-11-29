export default function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="w-20 h-20 text-2xl flex-shrink-0 border-2 border-gray-900"
    >
      {value}
    </button>
  );
}
