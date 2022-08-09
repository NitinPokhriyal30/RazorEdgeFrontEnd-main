import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const HomeProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    Axios.get("/homeproductlist").then((res) => setProductList(res.data));
  }, []);

  return (
    <>
      <div className="row">
        {productList.map((value, index) => (
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4" key={index}>
            <div className="product-page-icon-container">
              <img src={`/images/${value.img}`} className="multi" alt="multi" />
              <p>{value.title}</p>
              <Link
                to={`/admin-dashboard/productList/${value._id}`}
                className="product-edit-btn "
              >
                Edit
                <i className="fa-solid fa-pen-to-square"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeProductList;
