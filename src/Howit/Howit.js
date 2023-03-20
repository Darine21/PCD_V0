import React, { useState } from "react";
import "./Howit.css";
import Page from "./../Page/Pageexplicatif";

export default function AccordionWithImg() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleToggle1 = () => {
    setOpen1(!open1);
  };

  const handleToggle2 = () => {
    setOpen2(!open2);
  };

  const handleToggle3 = () => {
    setOpen3(!open3);
  };

  return (
    <>
      <section
        className="download-section "
        
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div
                id="accordion-1"
                className="accordion accordion-faq pb-100"
              >
               <div className="card">
                  <div
                    className="card-header py-4"
                    id="heading-1-1"
                    data-toggle="collapse"
                    role="button"
                    onClick={handleToggle1}
                    aria-expanded={open1}
                    aria-controls="collapse-1-1"
                  >
                    <h6 className="mb-0">
                      <span className="ti-gallery mr-3"></span> How start
                    </h6>
                  </div>
                  <div
                    id="collapse-1-1"
                    className={`collapse ${open1 ? "show" : ""}`}
                    aria-labelledby="heading-1-1"
                    data-parent="#accordion-1"
                  >
                    <div className="card-body" href="heading-1-1">
                      <p>
                       <Page/>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div
                    className="card-header py-4"
                    id="heading-1-2"
                    data-toggle="collapse"
                    role="button"
                    onClick={handleToggle2}
                    aria-expanded={open2}
                    aria-controls="collapse-1-2"
                  >
                    <h6 className="mb-0">
                      <span className="ti-gallery mr-3"></span> How chatting
                      with a doctor?
                    </h6>
                  </div>
                  <div
                    id="collapse-1-2"
                    className={`collapse ${open2 ? "show" : ""}`}
                    aria-labelledby="heading-1-2"
                    data-parent="#accordion-1"
                  >
                    <div className="card-body" href="heading-1-2">
                      <p>
                        You can integrate any supported identity provider such
                        as Google, Active Directory, Github, and Keyclock
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header py-4"
                    id="heading-1-3"
                    data-toggle="collapse"
                    role="button"
                    onClick={handleToggle3}
                    aria-expanded={open3}
                    aria-controls="collapse-1-3"
                  >
                    <h6 className="mb-0">
                      <span className="ti-gallery mr-3"></span> To schedule a consultation 
                    </h6>
                  </div>
                  <div
                    id="collapse-1-3"
                    className={`collapse ${open3 ? "show" : ""}`}
                    aria-labelledby="heading-1-3"
                    data-parent="#accordion-1"
                  >
                    <div className="card-body" href="heading-1-3">
                      <p>
                        You can integrate any supported identity provider such
                        as Google, Active Directory, Github, and Keyclock
                      </p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </section>
</>
);
}