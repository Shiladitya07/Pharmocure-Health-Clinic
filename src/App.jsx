import React from "react"
import {Main_logo, Nav,CarouselComponent,Specialties, Why, Services, About} from "../src/pages/home"
import Chatbot from "./components/chatbot"

function App() {
  return (
    <>
      <Main_logo />
      <Nav />
      <CarouselComponent />
      <Specialties />
      <Why />
      <Services />
      <About />
      <Chatbot />
    </>
  )
}

export default App;
