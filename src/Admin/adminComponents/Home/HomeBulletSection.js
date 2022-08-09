import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const HomeBulletSection = () => {
  const [bulletPoints, setbulletPoints] = useState([]);

  useEffect(() => {
    Axios.get("/homebullet").then((res) => setbulletPoints(res.data));
  }, []);

  return (
    <>
      {bulletPoints.map((value, index) => (
        <div className="row" key={index}>
          <div className="col col-md-10">
            <li>
              {parse(value.text)}
            </li>
          </div>
          <div className="col col-md-2 m-auto">
            <Link
              to={`/admin-dashboard/bullet/${value._id}`}
              className="edit-btn"
            >
              Edit
              <i className="fa-solid fa-pen-to-square"></i>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeBulletSection;
