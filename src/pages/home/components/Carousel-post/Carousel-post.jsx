import React from "react";
import CatergoryMovies from "../../../../../public/assets/icon-category-movie.svg";
import CatergorySeries from "../../../../../public/assets/icon-category-tv.svg";
import playBtn from "../../../../../public/assets/icon-play.svg";
import IconBookmarkEmpty from "../../../../../public/assets/icon-bookmark-empty.jsx";
import IconBookmarkFull from "../../../../../public/assets/icon-bookmark-full.jsx";
import { useDispatch } from "react-redux";
import { bookmarkedData } from "../../../../redux/dataSlice.js";

const CarouselPost = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <li className="glide__slide carousel_item" style={{ width: "470px" }}>
      <div className="carousel_play-wrapper">
        <div className="carousel_play-box">
          <img src={playBtn} alt="play button" className="carousel_play-btn" />
          <p className="carousel_play-text">Play</p>
        </div>
      </div>
      <img
        src={data.thumbnail.trending.large}
        alt="carousel bg photo"
        className="carousel_image"
      />

      <div
        className="carousel_bookmark"
        onClick={() =>
          dispatch(bookmarkedData({ ...data, isBookmarked: true }))
        }
      >
        {data.isBookmarked ? (
          <IconBookmarkFull className="post_bookmark-icon" />
        ) : (
          <IconBookmarkEmpty className="post_bookmark-icon" />
        )}
      </div>

      <div className="carousel_info">
        <div className="carousel_header">
          <p className="carousel_text">{data.year}</p>
          <span className="carousel_point"></span>
          <span className="carousel_category">
            <img
              src={data.category == "Movie" ? CatergoryMovies : CatergorySeries}
              alt="category icon"
            />
            <p className="carousel_text">{data.category}</p>
          </span>
          <span className="carousel_point"></span>
          <p className="carousel_text">{data.rating}</p>
        </div>
        <h1 className="carousel_subtitle">{data.title}</h1>
      </div>
    </li>
  );
};

export default CarouselPost;
