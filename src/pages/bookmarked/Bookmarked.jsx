import React from "react";
import Post from "../components/Post/post";
import { useSelector } from "react-redux";
import "./Bookmarked.css";

const Bookmarked = () => {
  let data = useSelector((state) => state.dataSlice.data);
  const ids = data.map(({ id }) => id);

  return (
    <div className="bookmarked">
      <h1 className="bookmarked_title">Bookmarked Movies</h1>
      <ul className="bookmarked_list">
        {data
          .filter(({ id }, index) => !ids.includes(id, index + 1))
          .filter(({category}) => category === "Movie")
          .map((item) => {
            if (item.isBookmarked) {
              return <Post type="bookmarked" data={item} key={item.id} />;
            }
          })}
      </ul>

      <h1 className="bookmarked_title">Bookmarked TV Series</h1>
      <ul className="bookmarked_list">
        {data
          .filter(({ id }, index) => !ids.includes(id, index + 1))
          .filter(({ category }) => category === "TV Series")
          .map((item) => {
            if (item.isBookmarked) {
              return <Post type="bookmarked" data={item} key={item.id} />;
            }
          })}
      </ul>
    </div>
  );
};

export default Bookmarked;
