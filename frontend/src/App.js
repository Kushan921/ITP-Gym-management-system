import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./sharedComponent/login";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" exact element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
