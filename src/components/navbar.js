import React from 'react';

import logo from './Assets/logo.png'
import cart_icon from './Assets/cart_icon.png'

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">



  <div className="container-fluid d-flex justify-content-around"> {/* Added justify-content-center class here */}
  <div className='d-flex align-items-center'> 
    <img src={logo} alt=""/>
    <div className="fs-5"> NitaiCart</div>
      
       </div>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="d-flex">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center"> {/* Added text-center class here */}
      <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
      </ul>
      
    </div>

    </div>
            <div className='d-flex column-gap-4'>    
                <button type="button" class="btn btn-outline-primary">Primary</button>
                <img src={cart_icon} alt=""/>
                <div className="d-flex w-20 h-20 justify-content-center align-items-center mt-n35"> 0</div>
            </div>
  </div>
</nav>
    );
}
export default Navbar;