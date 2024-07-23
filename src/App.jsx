import "./App.css";
import { useCounterContext } from "./context";

function App() {
  const { count, addCount, subCount } = useCounterContext();

  return (
    <>
      <button onClick={addCount}>+</button>
      <p>{count}</p>
      <button onClick={subCount}>-</button>
    </>
  );
}

export default App;
