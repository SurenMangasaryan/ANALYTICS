import { BrowserRouter } from "react-router-dom";
import Routing from "./router/Routing";
import ScrollTop from "./ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
