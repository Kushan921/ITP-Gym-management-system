import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./sharedComponent/login";
import Register from "./sharedComponent/register";
import Dashboard from "./admin/dashboard";
import AddInstructor from "./admin/Instructor/AddInstructor";
import UpdateInstructor from "./admin/Instructor/UpdateInstructor";
import Members from "./admin/members/ViewMembers";
import Allmembers from "./sharedComponent/allmembers";
import Modals from "./sharedComponent/Modal";
import Home from "./userView/Home/Home";
import Header from "./userView/Header/Header";
import Footer from "./userView/Footer/Footer";
import Contact from "./userView/Contact";
import About from "./userView/About";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/add-instructor" exact element={<AddInstructor />} />
          <Route path="/update-instructor" exact element={<UpdateInstructor />}/>
          <Route path="/members" exact element={<Members />} />
          <Route path="/allmembers" exact element={<Allmembers />} />
          <Route path="/modals" exact element={<Modals/>}/>
          <Route path="/home" exact element={<Home/>} />
          <Route path="/header" exact element={<Header/>}/>
          <Route path="/footer" exact element={<Footer/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/contact" exact element={<Contact/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
