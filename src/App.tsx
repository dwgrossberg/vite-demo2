import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
