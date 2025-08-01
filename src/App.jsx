import React from "react"
import {Main_logo, Nav,CarouselComponent,Specialties, Why, Services, About} from "../src/pages/home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/login"
import Registration from "./pages/registration";
// function App() {

//   return (
//     <>
//       <Main_logo />
//       <Nav />
//       <CarouselComponent />
//       <Specialties />
//       <Why />
//       <Services />
//       <About />
//       <Login />
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </Router>

//     </>
//   )

// }
const Home = () => {
  return (
    <>
      <Main_logo />
      <Nav />
      <CarouselComponent />
      <Specialties />
      <Why />
      <Services />
      <About />
    </>
  );
};

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />          {/* Renders homepage components */}
        <Route path="/login" element={<Login />} />    {/* Renders login page only */}
        <Route path="/registration" element={<Registration />} />
      </Routes>

  );
}
export default App
