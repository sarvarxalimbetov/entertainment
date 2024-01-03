import React from "react";
import search from "../../../public/assets/icon-search.svg";
import Carousel from "./components/Carousel/Carousel";
import { useForm } from "react-hook-form";
import Recommendation from "./components/Recommendation/Recommendation";
import data from "../../data/data.json";
import Post from "../components/Post/post";
import "./Home.css";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [searchData, setSearchData] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  const onSearch = (search) => {
    setSearchData([]);
    setSearchValue(search.input);
    data.map((item) => {
      if (item.title.toLowerCase().includes(search.input.toLowerCase())) {
        setSearchData((prevState) => [...prevState, item]);
      }
    });
  };

  return (
    <div className="home">
      <form className="home_form" onSubmit={handleSubmit(onSearch)}>
        <label className="home_search-icon">
          <img src={search} alt="search icon" />
        </label>
        <input
          type="text"
          placeholder="Search for movies or TV series"
          className="home_search-input"
          {...register("input")}
        />
      </form>
      {searchData.length > 0 && searchValue ? (
        <div className="search_wrapper">
          <p className="search_value">
            Found {searchData.length} results for ‘{searchValue}’
          </p>
          <ul className="search_result">
            {searchData.map((data) => (
              <Post data={data} key={data.title} />
            ))}
          </ul>
        </div>
      ) : searchValue ? (
        <p className="noresult_message">Sorry, we couldn't find any result</p>
      ) : (
        <>
          <Carousel />
          <Recommendation />
        </>
      )}
    </div>
  );
};

export default Home;
