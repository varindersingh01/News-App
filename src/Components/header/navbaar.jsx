import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
// import logo from '../image/logo.avif'


const Navbaar = (props) => {
  const changeColor = ({ isActive }) => {
    return {
      color: isActive ? "blue" : "white",
      // background: isActive ? "" : "",
      padding: isActive ? "5px": "",
      
    }
  }
  
const location=useLocation();
  return (
    <nav className="navbar navbar-expand-lg bg-dark py-2 border-bottom border-dark  ">
      <div className="container-fluid mx-auto position-relative text-center">

       <h3 className='text-white '>News</h3>
       <h3 className='text-primary'>App</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 px-2 mb-lg-0 fw-bold ">
          <li className="nav-item mx-3">
                
                <NavLink to='/' style={changeColor}> Country</NavLink>
              
            </li>

            <li className="nav-item mx-3">
            
            <NavLink to='/technology' style={changeColor}>Technology</NavLink>
            
            </li>

            <li className="nav-item mx-3 ">
                <NavLink to='/sport' style={changeColor}>Sport</NavLink>
              
            </li>

            <li className="nav-item mx-3 ">
                <NavLink to='/business' style={changeColor}> Business</NavLink>
            
            </li>



            


          </ul>
          <form className="d-flex" role="search">
            <input
               className="form-control me-2"
               type="text"
               placeholder="Search"
               aria-label="Search"
               disabled={location.pathname === "/" ? true : false}
               value={props.input}
               onChange={(e)=>props.setInput(e.target.value)}
        />
            <button className="btn btn-outline-primary bg-dark" type="submit" onClick={props.Submit}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

  )
}

export default Navbaar
