import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./sharedComponent/login";
import Register from "./sharedComponent/register";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" exact element={<Login/>} />
    <Route path="/register" exact element={<Register/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
