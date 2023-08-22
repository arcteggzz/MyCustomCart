import "./App.css";

// components
import ItemDisplay from "./components/ItemDisplay";
import ItemInput from "./components/ItemInput";

function App() {
  return (
    <div className="w-custom-mobile xl:w-customWidth my-10 mx-auto">
      <ItemInput/>
      <ItemDisplay/>
    </div>
  );
}

export default App;
