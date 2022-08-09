import React, { useEffect, useState } from "react";
import Axios from "axios";
import ClientPage from "../adminComponents/Client/ClientPage";

const AdminClientPage = () => {
  const [clientPage, setClientPage] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.get("/clientPage").then((res) => setClientPage(res.data));
  }, []);

  return (
    <>
      {clientPage.map((value, index) => (
        <ClientPage
          key={index}
          heading={value.heading}
          subheading={value.subheading}
          pera={value.pera}
          id={value._id}
        />
      ))}
    </>
  );
};

export default AdminClientPage;
