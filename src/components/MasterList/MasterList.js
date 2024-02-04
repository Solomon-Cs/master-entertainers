import React, { useEffect, useState } from "react";
import "./MasterList.css";

import Fire from "../../asset/image/fire.png";
import MasterCard from "../MasterCard/MasterCard";

const MasterList = () => {
  const [masterList, setMasterList] = useState(null);
  const [filterMaster, setFilterMaster] = useState(null);
  const [mainRating, setMainRating] = useState(0);

  useEffect(() => {
    fetchMasterList();
  }, []);

  const fetchMasterList = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=a7e1b792bc0f9b576605162ed5de64ed"
      );
      const data = await response.json();
      if (Array.isArray(data.results)) {
        setMasterList(data.results);
        setFilterMaster(data.results);
        console.log(data.results);
      }
    } catch (error) {
      console.log("Error fetching master list:", error);
    }
  };

  const handleFilter = (rate) => {
    if (rate === mainRating) {
      setMainRating(0);
      setFilterMaster(masterList);
    } else {
      setMainRating(rate);
      const filtered = masterList.filter(
        (master) => master.vote_average >= rate
      );
      setFilterMaster(filtered);
      console.log(filtered);
    }
  };

  return (
    <div>
      <div className="master_List_header">
        <h2 className="master_List_heading">
          Popular <img src={Fire} className="master_List_image" />{" "}
        </h2>
        <div className="master_List_function">
          <ul className="master_List_item">
            <li
              className={
                mainRating === 8
                  ? "master_List_item active"
                  : "master_List_item"
              }
              onClick={() => handleFilter(8.0)}
            >
              8+ Star
            </li>
            <li
              className={
                mainRating === 7
                  ? "master_List_item active"
                  : "master_List_item"
              }
              onClick={() => handleFilter(7.0)}
            >
              7+ Star
            </li>
            <li
              className={
                mainRating === 6
                  ? "master_List_item active"
                  : "master_List_item"
              }
              onClick={() => handleFilter(6)}
            >
              6+ Star
            </li>
          </ul>

          <select name="" id="" className="master_List_Sorting">
            <option value="">Sort By</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="master_List_Sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </div>

      <div className="master_card_container">
        {masterList ? (
          filterMaster.map((list) => (
            <div className="master_cards">
              <MasterCard key={list.id} list={list} />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MasterList;
