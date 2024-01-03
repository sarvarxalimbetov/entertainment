import React from "react";
import CatergoryMovies from "../../../../public/assets/icon-category-movie.svg";
import CatergorySeries from "../../../../public/assets/icon-category-tv.svg";
import IconBookmarkEmpty from "../../../../public/assets/icon-bookmark-empty";
import IconBookmarkFull from "../../../../public/assets/icon-bookmark-full";
import playBtn from "../../../../public/assets/icon-play.svg";
import { useDispatch } from "react-redux";
import { bookmarkedData, unBookmarkedData } from "../../../redux/dataSlice";
import "./post.css";

const Post = ({ data, type }) => {
  const dispatch = useDispatch();
  const isBookmarkedFunction = () => {
    if(type === "default") {
      dispatch(bookmarkedData({...data, isBookmarked: true}))
    } else if(type === "bookmarked") {
      dispatch(unBookmarkedData(data.id))
    }
  }

  return (
    <li className="post">
      <div className="play_wrapper">
        <div className="play_box">
          <img src={playBtn} alt="play button" className="play_btn" />
          <p className="play_text">Play</p>
        </div>
      </div>
      <div className="post_image">
        <img
          src={data.thumbnail.regular.medium}
          alt="post image"
          className="post_image"
        />
      </div>
      <div
        className="post_bookmark"
        onClick={isBookmarkedFunction}
      >
        {data.isBookmarked ? (
          <IconBookmarkFull className="post_bookmark-icon" />
        ) : (
          <IconBookmarkEmpty className="post_bookmark-icon" />
        )}
      </div>

      <div className="post_info">
        <p className="post_data">{data.year}</p>
        <span className="post_point"></span>
        <div className="post_category">
          <img
            src={data.category == "Movie" ? CatergoryMovies : CatergorySeries}
            alt="post category icon"
          />
          <p className="post_category-text">{data.category}</p>
        </div>
        <span className="post_point"></span>
        <p className="post_rating">{data.rating}</p>
      </div>

      <h1 className="post_title">{data.title}</h1>
    </li>
  );
};

export default Post;
