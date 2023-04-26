import React from "react";
import b from "../../Asset/bacell.png";
import S from "../../Asset/squamous.png";
import M from "../../Asset/m.jpg";
import s from "../../Asset/Sun-SPots.jpg";
import h from "../../Asset/hirarchi.png";
import l from "../../Asset/l.png";
import f from "../../Asset/fair.png";
import c from "../../Asset/ch.png";
import sy from "../../Asset/sys.png"
export default function FeatureImg({ ImgSource }) {
  return (
    <>
      <div id="products" className="feature-section ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center mb-5">
                <span className="text-uppercase color-secondary sub-title">

                </span>
                <h2> THE DIFFERENT TYPES OF SKIN CANCER</h2>
                <p style={{ fontSize: "20px" }}>
                  <table>
                    <tr >
                      <td>
                        <img src={b} style={{ width: "170px", height: "190px", marginTop: "20px", marginLeft: "40px" }} />
                      </td>
                      <td style={{ marginLeft: "20px" }}>
                        Basal cell carcinoma is the most common type of skin cancer and commonly affects sun-exposed areas.
                        It grows slowly over months or years and is rarely metastatic. Surgical treatment is often successful and results in good cosmetic outcomes.
                        Symptoms include a solid red or grayish-red lump that may bleed occasionally.
                      </td>
                    </tr>
                  </table>
                </p>
                <p style={{ fontSize: "20px" }}>
                  <table>
                    <tr>
                      <td>
                        <img src={S} style={{ width: "170px", height: "190px", marginTop: "20px", marginLeft: "40px" }} />
                      </td>
                      <td style={{ marginLeft: "20px" }}>
                        Squamous cell carcinoma is a fast-growing type of skin cancer.
                        It's more common in older people and can spread to other parts of the body.
                        Usually pink and scaly, it often appears on sun-exposed areas of the skin.
                      </td>
                    </tr>
                  </table>
                </p>
                <p style={{ fontSize: "20px" }}>
                  <table>
                    <tr>
                      <td>
                        <img src={M} style={{ width: "170px", height: "190px", marginTop: "20px", marginLeft: "40px" }} />
                      </td>
                      <td style={{ marginLeft: "20px" }}>
                        Melanoma is a dangerous form of skin cancer that can occur on sun-exposed or covered skin.
                        It can appear as a new spot or develop from an existing mole.
                        Early diagnosis through simple surgical treatment can lead to a cure.
                      </td>
                    </tr>
                  </table>
                </p>
              </div>
            </div>
          </div>
          <div className="row row-grid align-items-center">
            <h2 style={{ textAlign: "center" }}>THE RISKS OF DEVELOPING SKIN CANCER</h2>
            <br></br>
            {/* <div className="col-sm-4">
              <div >
                <div className="pr-4">
                  <div className="icon icon-shape icon-color-1 rounded-circle">
                    <span className="ti-face-smile"></span>
                  </div>
                </div>
                <br></br>
                <div className="icon-text" style={{ backgroundColor: "red", }}>

                  <h5 style={{ marginRight: "-190px" }}><img src={s} style={{ width: "207px", height: "179px", borderRadius: '50%', overflow: 'hidden', marginRight: "20px", marginTop: "40px" }} /> Excessive sun exposure.</h5>

                </div>
              </div>
              <div className="d-flex align-items-start mb-5">
                <div className="pr-4">
                  <div className="icon icon-shape icon-color-2 rounded-circle">

                  </div>
                </div>
                <div className="icon-text" >
                  <h5 style={{ marginRight: "-190px" }}> <img src={h} style={{ width: "207px", height: "179px", borderRadius: '50%', overflow: 'hidden', marginRight: "10px" }} />Have a personal or family history of skin cancer.</h5>

                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="pr-4">
                  <div className="icon icon-shape icon-color-3 rounded-circle">

                  </div>
                </div>
                <div className="icon-text">
                  <h5 style={{ marginRight: "-190px" }}> <img src={l} style={{ width: "207px", height: "179px", borderRadius: '50%', overflow: 'hidden', marginRight: "20px" }} />use of tanning beds or lamps</h5>

                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="position-relative" style={{ zindex: 20 }}>

              </div>
            </div>

            <div className="col-lg-4">

              <div className="d-flex align-items-start mb-5">
                <div className="pr-4">
                  <div className="icon icon-shape icon-color-1 rounded-circle">
                    <span className="ti-layout-media-right"></span>
                  </div>
                </div>
                <div className="icon-text">
                  <h5 style={{ marginRight: "-190px" }}><img src={f} style={{ width: "207px", height: "179px", marginRight: "30px", borderRadius: '50%', overflow: 'hidden', marginTop: "60px" }} />having fair skin that burns easily</h5>
                </div>
              </div>

              <div className="d-flex align-items-start mb-5">
                <div className="pr-4">
                  <div className="icon icon-shape icon-color-1 rounded-circle">
                    <span className="className=ti-face-smile"></span>
                  </div>
                </div>
                <div className="icon-text d-inline-block align-middle">
                  <h5 style={{ marginRight: "-190px" }}><img src={sy} style={{ width: "207px", height: "179px", fontSize: "19px", borderRadius: '50%', overflow: 'hidden', marginRight: "20px" }} />Aging and weakened immune system.</h5>

                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="pr-4">
                  <div className="icon icon-shape icon-color-6 rounded-circle">
                    <span className="ti-palette"></span>
                  </div>
                </div>
                <div className="icon-text">
                  <h5 style={{ marginRight: "-190px" }} > <img src={c} style={{ width: "207px", height: "179px", borderRadius: '50%', overflow: 'hidden', marginRight: "20px" }} />The use of cosmetic products containing chemical ingredients.</h5>

                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div class="container-fluid">
        <div class="row">
   <div class="col-lg-5" style={{backgroundColor:"#C49D83",marginLeft:"100px",marginTop:"30px",display:"flex"}}>
      <div class="col-sm-5 col-md-5" ><img src={s} style={{ width: "207px", height: "179px", borderRadius: '50%', overflow: 'hidden', marginRight: "20px", }} /> </div>
      <div class="col-sm-5 col-md-6" style={{width:"60%"}}><h6 style={{marginTop:"15%"}}>Excessive sun exposure.</h6></div>
    </div>
    <div class="col-lg-5" style={{backgroundColor:"#BDA18A",marginLeft:"100px",marginTop:"30px",display:"flex"}}>
      <div class="col-sm-5 col-md-5" ><img src={h} style={{ width: "207px", height: "179px", borderRadius: '50%', overflow: 'hidden', marginRight: "10px" }} /></div>
      <div class="col-sm-5 col-md-6" style={{width:"60%"}}><h6 style={{marginTop:"15%"}}>Have a personal or family history of skin cancer.</h6></div>
    </div>
    <br/>
   <div class="col-lg-5" style={{backgroundColor:"#E8D5CC",marginLeft:"100px",marginTop:"30px",display:"flex"}}>
      <div class="col-sm-5 col-md-5" ><img src={l} style={{ width: "207px", height: "179px", borderRadius: '50%', overflow: 'hidden', marginRight: "20px" }} /></div>
      <div class="col-sm-5 col-md-6" style={{width:"60%"}}><h6 style={{marginTop:"15%"}}>use of tanning beds or lamps</h6></div>
    </div>
 <div class="col-lg-5" style={{backgroundColor:"#D5CABC",marginLeft:"100px",marginTop:"30px",display:"flex"}}>
      <div class="col-sm-5 col-md-5" ><img src={f} style={{ width: "207px", height: "179px", marginRight: "30px", borderRadius: '50%', overflow: 'hidden' }} /></div>
      <div class="col-sm-5 col-md-6" style={{width:"60%"}}><h6 style={{marginTop:"15%"}}>having fair skin that burns easily</h6></div>
    </div>
    <br/>
   <div class="col-lg-5" style={{backgroundColor:"#F5EFE6",marginLeft:"100px",marginTop:"30px",display:"flex"}}>
      <div class="col-sm-5 col-md-5" ><img src={sy} style={{ width: "207px", height: "179px", fontSize: "19px", borderRadius: '50%', overflow: 'hidden', marginRight: "20px" }} /></div>
      <div class="col-sm-5 col-md-6" style={{width:"60%"}}><h6 style={{marginTop:"15%"}}>Aging and weakened immune system.</h6></div>
    </div>
 <div class="col-lg-5" style={{backgroundColor:"#F5EEEA",marginLeft:"100px",marginTop:"30px",display:"flex"}}>
      <div class="col-sm-5 col-md-5" ><img src={c} style={{ width: "207px", height: "179px", borderRadius: '50%', overflow: 'hidden', marginRight: "20px" }} /></div>
      <div class="col-sm-5 col-md-6" style={{width:"60%"}}><h6 style={{marginTop:"15%"}}>The use of cosmetic products containing chemical ingredients.</h6></div>
    </div>
  </div>
        </div>


        <h2 style={{ textAlign: "center" ,marginTop:"150px"}}>HOW CAN I DETECT SKIN CANCER?</h2>

        <h6 style={{ marginTop: "40px", marginLeft: "50px" }}>
          In case you suspect that you may have skin cancer symptoms, seeking immediate medical attention is crucial to prevent potential health risks. Be aware of the following signs:
          <h6 style={{ marginLeft: "130px" }}>
            -Continuous red, pale or pearly areas/bumps on your skin.<br></br>
            -Moles that change in size, shape or color.<br></br>
            -A spot that bleeds occasionally and then heals.<br></br>
            -New moles or freckles that transform in appearance or bleed over time.<br></br>
            -Persistent dry, scaly wounds that don't heal.<br></br>
          </h6>
          If you encounter any of these symptoms, your doctor may perform a biopsy on the affected area to determine the issue.
        </h6>

      </div>
    </>
  );
}
