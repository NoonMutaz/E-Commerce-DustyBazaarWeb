import React from 'react'
import { Link } from 'react-router-dom';

export default function Login({Register}) {
  return (
    <div>
<form className='d-flex flex-column align-items-center  mt-5 '   >
  <div data-mdb-input-init className="form-outline  " style={{width:'90%'}}>
    <input type="email" id="form2Example1" className="form-control" placeholder='Email address' />
    {/* <label className="form-label" for="form2Example1" ></label> */}
  </div>
 
  <div data-mdb-input-init className="form-outline mb-1 mt-3" style={{width:'90%'}}>
    <input type="password" id="form2Example2" className="form-control" placeholder='Password' />
    {/* <label className="form-label" for="form2Example2"></label> */}
  </div>
 
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">

   <div className='d-flex justify-content-between align-items-center mt-3 gap-5' >
    <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" style={{backgroundColor: 'tomato'}} defaultChecked />
        <label className="form-check-label"  > Remember me </label>
      </div>   
       <div  >

      <Link to=" "  style={{ textDecoration: 'none', color: 'tomato' }}>Forgot password?</Link>
    </div>
    </div>


  </div>
    </div>   

    <button style={{ backgroundColor: 'rgb(27, 46, 46)',  width:'40%',marginTop:'-1rem'}} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block  " >Sign in</button>

 

  <div className="text-center mt-2">
    <p>Not a member? <Link style={{color:'tomato'}} to="" onClick={Register}>Register</Link></p>
    <p>or sign up with:</p>
    <button  type="button" data-mdb-button-init data-mdb-ripple-init style={{color:'black'}} className="btn btn-link btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button  type="button" data-mdb-button-init data-mdb-ripple-init style={{color:'black'}}  className="btn btn-link btn-floating mx-1 ">
      <i className="fab fa-google"></i>
    </button>

    <button  type="button" data-mdb-button-init data-mdb-ripple-init style={{color:'black'}}  className="btn btn-link   mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button  type="button" data-mdb-button-init data-mdb-ripple-init  style={{color:'black'}} className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
</form>
    </div>
  )
}
