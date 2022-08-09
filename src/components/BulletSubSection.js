import React, { useEffect, useState } from "react";
import Axios from "axios";
import parse from "html-react-parser";

const BulletSubSection = (props) => { 
  const [bulletPoints, setbulletPoints] = useState([]);

  useEffect(() => {
    Axios.get("/homebullet").then((res) => setbulletPoints(res.data));
  }, []);

  return (
    <>
      <div className="bullets-point-sec">
        <div className="container">
          <div className="row">
            <div className=" col-lg-6 m-auto">
              <div className="bullet-img-sec">
                <img
                  src={`/images/${props.image}`}
                  className="BullrtsImg"
                  alt="BullrtsImg"
                />
              </div>
            </div>
            <div className=" col-lg-6 m-auto">
              <div className="bullet-txt-container investment-txt-justy">
                <ul>
                  {bulletPoints.map((value, index) => (
                    <li key={index}>{parse(value.text)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BulletSubSection;
