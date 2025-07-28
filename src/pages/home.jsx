import React from "react"
import "../assets/styles/home.css"
function Main_logo() {
 

  return (
    <>
       <header>
          <div className="logo">
            <br></br>
            <h1>Online Health Clinic</h1>
          </div>
          <div className="search">
            <input
            placeholder="TYPE Here"
            class="brutalist-input smooth-type"
            type="text"
            />
          <label class="brutalist-label"></label>
          </div>
        <div className="loginbutt">
            <button><a>Login</a></button>
        </div>
       </header>
       <br></br>
       <hr></hr> 
    
    </>
  )
}
function Nav () {
    return (
        <>
           <nav>
                <div>
                    <a>Buy Medicine</a>

                </div>
            </nav>
        </>
    )
}
export {Main_logo,Nav}