import { Main_logo, Nav, CarouselComponent, Specialties, Why, About } from "../src/pages/home";
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/login";
import Registration from "./pages/registration";
import Service from './pages/service';
import Chatbot from "./components/chatbot";
import Sidebar from "./pages/sidebar";
import Navbar from "./pages/navbar";
import Dashboard from "./pages/dashboard";
import { default as BuyMedicine } from "./pages/buymedicine";
import BookAppointment from "./pages/bookappointment";
import ContactOptions from "./pages/contact";
import BackToTop from "./pages/backtotop";
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
    <ContactOptions />
    <BackToTop />
   
  </>
);

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />          {/* Renders homepage components */}
      <Route path="/login" element={<Login />} />    {/* Renders login page only */}
      <Route path="/registration" element={<Registration />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/buymedicine" element={<BuyMedicine />} />
      <Route path="/bookappointment" element={<BookAppointment />} />
    </Routes>
    <BackToTop />
    </>
  );
}

export default App;