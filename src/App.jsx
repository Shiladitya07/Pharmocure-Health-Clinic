import React from "react"
import {Main_logo, Nav,CarouselComponent,Specialties, Why, About} from "../src/pages/home"
import Service from './pages/service';


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
    </>
  )
}

export default App
