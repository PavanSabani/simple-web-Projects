import { useState, useCallback, useEffect } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "~@#$%^&*{}+_[]";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-xl px-6 py-6 my-12 text-orange-500 bg-gray-800">
      <h1 className="text-white text-2xl font-bold text-center mb-6">Password Generator</h1>

      <div className="flex items-center shadow rounded-lg overflow-hidden mb-4 bg-white">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 text-gray-800"
          placeholder="Generated Password"
          readOnly
        />
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 transition-all"
          onClick={() => {
            navigator.clipboard.writeText(password);
          }}
        >
          Copy
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label htmlFor="length" className="text-white">Length: {length}</label>
          <input
            id="length"
            type="range"
            min={8}
            max={20}
            value={length}
            className="cursor-pointer w-2/3"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="numberCheck"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="accent-orange-500"
          />
          <label htmlFor="numberCheck" className="text-white">Include Numbers</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="charCheck"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className="accent-orange-500"
          />
          <label htmlFor="charCheck" className="text-white">Include Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;