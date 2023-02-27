import React from "react";

export default function Counter({ className }) {
  return (
    <>
      <div className={`counter ${className}`}>
        <div
          style={{
            position: "relative",
            top: "5rem",
          }}
          className="container"
        >
          {/* <div className="row">
            <ul className="list-inline counter-wrap">
              <li className="list-inline-item">
                <div className="single-counter text-center">
                  <span>2305</span>
                  <h6>Happy Client</h6>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="single-counter text-center">
                  <span>2145</span>
                  <h6>App Download</h6>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="single-counter text-center">
                  <span>2345</span>
                  <h6>Total Rates</h6>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="single-counter text-center">
                  <span>2245</span>
                  <h6>Awards win</h6>
                </div>
              </li>
            </ul>
          </div> */}

          <div className="row justify-content-center">
            <div className="col-12">
              <div className="customer-slider-wrap client-section-wrap text-center gray-light-bg shadow-lg p-4">
                <div className="text-center">
                  <p className="lead">
                    Operate on any kind of
                    <strong className="color-secondary font-weight-bold">
                      {" "}
                      Infrastructure
                    </strong>
                    <br />
                    Public Cloud: AWS, Azure, GCP. Or On Prem: VMWare,
                    Openstack...
                  </p>
                </div>
                <ul className="list-inline justify-content-between  test-content">
                  <li className="list-inline-item">
                    <img
                      src="assets/img/aws.svg"
                      alt="client"
                      className="img-fluid aws-image"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="assets/img/azure.svg"
                      alt="client"
                      className="img-fluid azure-image"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="assets/img/gcp.svg"
                      alt="client"
                      className="img-fluid gcp-image"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="assets/img/vmware.webp"
                      alt="client"
                      className="img-fluid vmware-image"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="assets/img/openstack.svg"
                      alt="client"
                      className="img-fluid openstack-image"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
     );
}
