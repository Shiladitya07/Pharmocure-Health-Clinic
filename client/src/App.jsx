import { Main_logo, Nav, CarouselComponent, Specialties, Why, About } from "../src/pages/home";
import { Routes, Route, Navigate } from 'react-router-dom';
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
import ContactUs from "./pages/contactus";
import HealthRecordsPage from "./pages/healthrecords";
import LabTest from "./pages/labtest";
import Overview from "./pages/dashboard"; // Your default dashboard screen
import PatientVisitChart from "./pages/appgraph";
import Piechart from "./pages/docover";

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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        
        {/* Dashboard layout with default "Overview" */}
        <Route path="/admin" element={<Dashboard />}>
          <Route index element={<Overview />} /> {/* Default when /admin is visited */}
        </Route>

        <Route path="/buymedicine" element={<BuyMedicine />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/healthrecords" element={<HealthRecordsPage />} />
        <Route path="/labtest" element={<LabTest />} />
        <Route path="/admin/docover" element={<Piechart />} />
        <Route path="/admin/appgraph" element={<PatientVisitChart />} />
      </Routes>

      <BackToTop />
    </>
  );
}

export default App;
