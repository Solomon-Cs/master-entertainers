import React from "react";
import { Link } from "react-router-dom";
import image from "../../asset/image/ss.jpg";
import image2 from "../../asset/image/glowing-star.png";
import "./MasterCard.css";

const MasterCard = ({list}) => {
  const master_image = "https://image.tmdb.org/t/p/w500"+list.poster_path;

  return (
    <div>
      <a href="https://www.themoviedb.org/movie/${list.id}" className="master_card">
        <img src={master_image} className="master_image1" />
        <div className="master_details">
          <h3 className="master_details_heading"> {list.original_title} </h3>
          <div className="master_data_rate">
            <p> {list.release_date} </p>
            <p>
              {list.rate_average}
              <img src={image2} className="master_image2" alt="this is star" />
            </p>
          </div>
          <p className="master_description">
            {list.overview.slice(0,150) + ".."}
          </p>
        </div>
      </a>
    </div>
  );
};

export default MasterCard;
