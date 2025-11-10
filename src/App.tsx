
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouting } from "./routing/app-routing";
function App() {
  return (
    <BrowserRouter>
      <AppRouting />
    </BrowserRouter>
  );
}

export default App;
