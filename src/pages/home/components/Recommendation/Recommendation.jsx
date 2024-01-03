import React from "react";
import Post from "../../../../components/Post/post";
import data from "../../../../data/data.json";
import "./Recommendation.css";

const Recommendation = () => {
  return (
    <div className="recommendation">
      <h1 className="recommendation_title">Recommended for you</h1>

      <ul className="recommendation_list">
        {data.map((item) => {
          if (!item.isTrending) {
            return <Post type="default" data={item} key={item.id} />;
          }
        })}
      </ul>
    </div>
  );
};

export default Recommendation;
