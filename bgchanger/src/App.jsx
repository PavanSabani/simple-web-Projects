import { useState } from "react"

function App() {
  const [color, SetColor] = useState("white");

  return (
    <>
      <div className="w-full h-screen transition-all duration-300" style={{ backgroundColor: color }}>
        <div className="flex justify-center items-center gap-4 h-full">
          <button onClick={() => SetColor("red")} className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            Red
          </button>
          <button onClick={() => SetColor("black")} className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
            Black
          </button>
          <button onClick={() => SetColor("blue")} className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Blue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
