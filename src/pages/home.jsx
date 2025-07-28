import React from "react"
function Main_logo() {
 

  return (
    <>
       <header>
         <div><h1>Online Health Clinic</h1></div>
        <div class="brutalist-container">
        <input
            placeholder="TYPE HERE"
            class="brutalist-input smooth-type"
            type="text"
        />
        <label class="brutalist-label"></label>
        </div>
       <button>Login</button>
       </header>
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