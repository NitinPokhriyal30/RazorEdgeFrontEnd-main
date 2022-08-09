import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import parse from "html-react-parser"; 

const HomeAccordian = () => {
  const [accordian, setAccordian] = useState([]);

  useEffect(() => {
    Axios.get("/homeaccordian").then((res) => setAccordian(res.data));
  }, []);

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {accordian.map((value, index) => (
        <div className="row" key={index}>
          <div className="col-md-10">
            <Accordion
              expanded={expanded === `"${index}"`}
              onChange={handleChange(`"${index}"`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
              >
                <Typography>{value.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* <Typography>{value.desc}</Typography> */}
                <Typography>{parse(value.desc)}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="col-md-2 m-auto">
            <Link
              to={`/admin-dashboard/accordian/${value._id}`}
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

export default HomeAccordian;
