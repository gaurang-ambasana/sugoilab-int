import { useCallback, useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [preview, setPreview] = useState("Preview will appear here");
  const [crazyChecked, setCrazyChecked] = useState(false);
  const [normalChecked, setNormalChecked] = useState(false);

  const swapCase = useCallback((str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toLowerCase()) result += str[i].toUpperCase();
      else result += str[i].toLowerCase();
    }
    return result;
  }, []);

  useEffect(() => {
    if (crazyChecked) {
      const prew = swapCase(input);
      setPreview(`Crazy Output is : ${prew}`);
    }
    normalChecked && setPreview(`Original text is : ${input}`);
  }, [crazyChecked, input, normalChecked, swapCase]);

  return (
    <div>
      <input
        type="text"
        name="input"
        id="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <br />
      <input
        type="radio"
        name="case"
        id="crazy"
        checked={crazyChecked}
        onChange={(e) => setCrazyChecked(e.target.checked)}
      />
      <label htmlFor="case">Crazy Case</label>
      <br />
      <input
        type="radio"
        name="case"
        id="normal"
        checked={normalChecked}
        onChange={(e) => setNormalChecked(e.target.checked)}
      />
      <label htmlFor="case">Original Case</label>
      <p id="output">{preview}</p>
    </div>
  );
}

export default App;
