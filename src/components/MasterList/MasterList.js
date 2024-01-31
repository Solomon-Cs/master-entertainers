import React, { useEffect, useState } from "react";
import "./MasterList.css";

import Fire from "../../asset/image/fire.png";
import MasterCard from "../MasterCard/MasterCard";

const MasterList = () => {
  const [master_List, setMaster_List] = useState(null);

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
        setMaster_List(data.results);
      }
    } catch (error) {
      console.log("Error fetching master list:", error);
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
            <li className="master_List_item active">3+ Star</li>
            <li className="master_List_item">4+ Star</li>
            <li className="master_List_item">5+ Star</li>
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

      <div className="master_cards">
        {master_List ? (
          master_List.map((list) => <MasterCard key={list.id} list={list} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MasterList;
