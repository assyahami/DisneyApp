import {FaFacebookSquare,FaTwitterSquare,FaInstagramSquare} from "react-icons/fa"
function Footer(){
    return (
      <section className="container-fluid mainfooter">
        <div className="founder">
          <div className="d-flex p-0  align-items-center justify-content-center ">
            <img src="./images/logo.svg" className="mb-5" id="logo" alt="" />
            <h4 className="text-white p-0 text-center ">Founder By Walt Ray</h4>
          </div>
        </div>

        <div className="Footercontent">
          <div className="d-flex flex-column justify-content-center align-items-start">
            <div className="text-start ms-4">
            <ul clasName="d-flex list list-unstyled gap-2 align-items-start">
              <li>About</li>
              <li>Disney+</li>
              <li>HotstarTerms</li>
              <li>UsePrivacy </li>
              <li>PolicyFAQFeedbackCareers</li>
            </ul>
              <span>
                © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all
                related channel and programming logos are service marks of, and
                all related programming visuals and elements are the property
                of, Home Box Office, Inc. All rights reserved.
              </span>
            </div>
          </div>
          <br />
          <div className="ms-5">
            <div className="">
              <h4>Contact us</h4>
            </div>
            <div className="media mt-3 d-flex  flex-wrap">
              <FaFacebookSquare id="mediaicon" />
              <FaTwitterSquare id="mediaicon" />
              <FaInstagramSquare id="mediaicon" />
            </div>
          </div>
          <div className="medias">
            <div className="">
            <div className="">
              <h4>Disney+ Hostar</h4>
            </div>
            <div className="mt-3">
              <img
                src="https://icon-library.com/images/apple-app-store-icon-vector/apple-app-store-icon-vector-21.jpg"
                alt=""
                className="img-fluid h-25 w-50 imgshadow"
              />
            </div>
            </div>
          <div className="">
            <div className="">
              <h5 className=" text-white">Service</h5>
            </div>
            <ul className="mt-3 d-grid pt-2 list-unstyled text-white">
              <li>BrodCasting</li>
              <li>Publishing</li>
              <li>Radio</li>
              <li>Streaming</li>
              <li>Tevelsion</li>
            </ul>
          </div>
          </div>
        </div>
      </section>
    );
}

export default Footer