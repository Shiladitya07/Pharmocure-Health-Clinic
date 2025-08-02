import { Main_logo, Nav, CarouselComponent, Specialties, Why, About } from "../src/pages/home";
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/login";
import Registration from "./pages/registration";
import Service from './pages/service';
import Chatbot from "./components/chatbot";
import Sidebar from "./pages/sidebar";
import Navbar from "./pages/navbar";
import Dashboard from "./pages/dashboard";

// Home page component (for "/")
const Home = () => (
  <>
    <Main_logo />
    <Nav />
    <CarouselComponent />
    <Specialties />
    <Service />
    <Why />
    <About />
    <Chatbot />
    {/* <Sidebar />
    <Navbar /> */}
    <Dashboard />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />          {/* Renders homepage components */}
      <Route path="/login" element={<Login />} />    {/* Renders login page only */}
      <Route path="/registration" element={<Registration />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;