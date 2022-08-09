import React, { useEffect, useState } from "react";
import Axios from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const CareerGallery = () => {
  const [careerGallery, setCareerGallery] = useState([]);

  useEffect(() => {
    Axios.get("/career-gallery").then((res) => setCareerGallery(res.data));
  }, []);

  return (
    <ImageList
      // sx={{ width: 1310, height: 450 }}
      cols={3}
    >
      {careerGallery.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`/images/${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`/images/${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.img}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default CareerGallery;
