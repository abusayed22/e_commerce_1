import React from "react";
import {Link} from 'react-router-dom'

function Read() {
  return <div>
        <div className="fashion_section">
  <div id="main_slider" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="container">
          <h1 className="fashion_taital">Man &amp; Woman Fashion</h1>
          <div className="fashion_section_2">
            <div hrefclassName="row">

              <div className="col-lg-4 col-sm-4">
                <div className="box_main">
                  <h4 className="shirt_text">Man T -shirt</h4>
                  <p className="price_text">
                    Price <span style={{ color: "#262626" }}>$ 30</span>
                  </p>
                  <div className="tshirt_img">
                    {/* <img src="images/tshirt-img.png" /> */}
                  </div>
                  <div className="btn_main">
                    <div className="buy_bt">
                      <Link to="#">Buy Now</Link>
                    </div>
                    <div className="seemore_bt">
                      <Link to="#">See More</Link>
                    </div>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="container">
          <h1 className="fashion_taital">Man &amp; Woman Fashion</h1>
          <div className="fashion_section_2">
            <div className="row">
              
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="container">
          <h1 className="fashion_taital">Man &amp; Woman Fashion</h1>
          <div className="fashion_section_2">
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <div className="box_main">
                  <h4 className="shirt_text">Man T -shirt</h4>
                  <p className="price_text">
                    Price <span style={{ color: "#262626" }}>$ 30</span>
                  </p>
                  <div className="tshirt_img">
                    <img src="images/tshirt-img.png" />
                  </div>
                  <div className="btn_main">
                    <div className="buy_bt">
                      <Link to="#">Buy Now</Link>
                    </div>
                    <div className="seemore_bt">
                      <Link to="#">See More</Link>
                    </div>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <Link
      className="carousel-control-prev"
      to="#main_slider"
      role="button"
      data-slide="prev"
    >
      <i className="fa fa-angle-left" />
    </Link>
    
  </div>
</div>

  </div>;
}

export default Read;
