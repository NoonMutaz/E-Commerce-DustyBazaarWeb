
import { Link } from 'react-router-dom';
import { React,useState } from 'react';

export default function Register({Login}) {
  const [passwordMatch, setPasswordMatch] =useState('');
  const [confirmPassword, setConfirmPassword] =useState('');


const handlePasswordChange = (e) => {
  setPasswordMatch(e.target.value);
};  
const handleConfirmPasswordChange = (e) => {
  setConfirmPassword(e.target.value);
  if(passwordMatch!==confirmPassword){
    <div style={{color:'red'}}> password not matching</div>
  }
};


  return (
    <div>
       <div>
<form className='d-flex flex-column align-items-center  mt-3 '   >
  <div data-mdb-input-init className="form-outline  " style={{width:'90%'}}>
    <input type="email" id="form2Example1" className="form-control"  placeholder='Email address' />
    {/* <label className="form-label" for="form2Example1" ></label> */}
  </div>
 
  <div data-mdb-input-init value="password1" className="form-outline mb-1 mt-3" style={{width:'90%'}}>
    <input onChange={handlePasswordChange} type="password" id="form2Example2" className="form-control" placeholder='Password' />
    {/* <label className="form-label" for="form2Example2"></label> */}
  </div>
    <div data-mdb-input-init value="password2" className="form-outline mb-1 mt-3" style={{width:'90%'}}>
    <input onChange={handleConfirmPasswordChange} type="password" id="form2Example2" className="form-control" placeholder='Re-enter Password' />
    {/* <label className="form-label" for="form2Example2"></label> */}
  </div>
 {passwordMatch!==confirmPassword && (
   <div style={{color:'red'}}> password not matching</div>
 )}
  <div className="row mb-4  " style={{marginTop:'-25px'}}  >
    <div className="col d-flex justify-content-center">

   <div className='d-flex justify-content-between align-items-center mt-5 gap-5' >
    <div className="form-check">
        <input className="form-check-input" type="checkbox" style={{backgroundColor: 'tomato'}} value="" id="form2Example31" defaultChecked />
        <label className="form-check-label"  > Remember me </label>
      </div>   
       <div  >

      <Link href="#!" style={{ textDecoration: 'none',color:'tomato' }}>Forgot password?</Link>
    </div>
    </div>


  </div>
    </div>   

    <button style={{ backgroundColor: 'rgb(27, 46, 46)',  width:'40%',marginTop:'-1rem'}} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block  " >Sign in</button>

 

  <div className="text-center mt-2">
    <p>Already a member? <Link to=" "  style={{color: 'tomato'}} onClick={Login}>Login</Link></p>
    <p>or sign up with:</p>
    <button style={{color: 'black'}} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button style={{color: 'black'}}  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button style={{color: 'black'}} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button style={{color: 'black'}} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
</form>
    </div>
    </div>
  )
}
