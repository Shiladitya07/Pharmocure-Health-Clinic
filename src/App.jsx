import React from "react"
import {Main_logo, Nav,CarouselComponent,Specialties, Why, Services, About} from "../src/pages/home"
import Service from './pages/service';
import Chatbot from "./components/chatbot"



function App() {
  return (
    <>
      <Main_logo />
      <Nav />
      <CarouselComponent />
      <Specialties />
      <Why />
      <Service />
      <About />
      <Chatbot />
    </>
  )
}

export default App;
