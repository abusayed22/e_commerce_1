import React from "react";
import {Link} from 'react-router-dom'
import logo from '../../../images/logo.png'
// import logo from '../../../images/logo.png'
import '../../../style.css'
import Catagory from "./Catagory";

function Header() {
  return <div>
<div className="main__img">
<div className="banner_bg_main">
  {/* header top section start */}
  <div className="container">
    <div className="header_section_top">
      <div className="row">
        <div className="col-sm-12">
          <div className="custom_menu">
            <ul>
              <li>
                <Link to="/add">Add-product</Link>
              </li>
              <li>
                <Link to="#">Gift Ideas</Link>
              </li>
              <li>
                <Link to="#">New Releases</Link>
              </li>
              <li>
                <Link to="#">Today's Deals</Link>
              </li>
              <li>
                <Link to="#">Customer Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* header top section start */}
  {/* logo section start */}
  <div className="logo_section">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className={logo}>
            <Link to="index.html">
              {/* <img src={logo} alt='.'/> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* logo section end */}
  {/* header section start */}
  
  
</div>
</div>
<Catagory />
  </div>;
}

export default Header;
