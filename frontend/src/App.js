import "./App.css";
import { BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Login from "./sharedComponent/login";
import Register from "./sharedComponent/register";
import Dashboard from "./admin/dashboard";
import AddInstructor from "./admin/Instructor/AddInstructor";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login/>} />
        <Route path="/register" exact element={<Register/>} />
        <Route path="/dashboard" exact element={<Dashboard/>} />
        <Route path="/add-instructor" exact element={<AddInstructor/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
