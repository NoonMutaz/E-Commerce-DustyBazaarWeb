import React from "react"
import { Link } from "react-router-dom"
const Footer = () => 
<footer style={{backgroundColor:'rgb(27, 46, 46)',color:'white',alignItems:'center'}} className="page-footer font-small blue w-100  pt-4 ">
    <div className="container-fluid text-center  ">
        <div className="row justify-content-center ">
         

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3" style={{ textAlign: 'left' }}>
                <h5  className="text-uppercase">Other Policies</h5>
                <ul   className="list-unstyled">
                    <li><Link to='' style={{textDecoration:'none',color:'white'}} href="#!">Terms of Service</Link></li>
                    <li><Link to='' style={{textDecoration:'none',color:'white'}} href="#!">Privacy Policy</Link></li>
                    <li><Link to='' style={{textDecoration:'none',color:'white'}} href="#!">Contact Us</Link></li>
                </ul>
            </div>


            <div className="col-md-3 mb-md-0 mb-3" style={{ textAlign: 'left' }}>
                <h5  className="text-uppercase">Shop with us</h5>
                <ul   className="list-unstyled">
                    <li><Link to='' style={{textDecoration:'none',color:'white'}} href="#!">Your Account Now</Link></li>
                    <li><Link to='' style={{textDecoration:'none',color:'white'}} href="#!"> Your oders</Link></li>
                    <li><Link to='' style={{textDecoration:'none',color:'white'}} href="#!"> Your address</Link></li>
                </ul>
            </div>




            <div className="col-md-3 mb-md-0 mb-3" style={{ textAlign: 'left' }}>
                <h5 className="text-uppercase">	
Let Us Help You</h5>
                <ul className="list-unstyled" style={{ textAlign: 'left' }}>
                    <li ><Link to='' style={{textDecoration:'none',color:"white",textAlign:'start'}} href="#!"> Help</Link></li>
                    <li><Link to='' style={{textDecoration:'none',color:"white"}} href="#!">Shipping & Delivery</Link></li>
                    <li><Link to='' style={{textDecoration:'none',color:"white"}} href="#!">Returns & Replacements</Link></li>
                    <li><Link to='' style={{textDecoration:'none',color:"white"}} href="#!">Recalls and Product Safety Alerts</Link></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2025 Copyright:
        <a style={{textDecoration:'none', }}  href="/"> DustyBazaar.com</a>
    </div>

</footer>

export default Footer