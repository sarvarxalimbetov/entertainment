import React from "react";
import data from "../../../../data/data.json";
import CarouselPost from "../Carousel-post/Carousel-post";
import Glide from "@glidejs/glide";
import "./Carousel.css";

const Carousel = () => {
  React.useEffect(() => {
    const glide = new Glide('.glide', {
      type: "carousel",
      focusAt: 0,
      hoverpause: true,
      autoplay: 5000,
      gap: 40,
      perView: 3,
      startAt: 1,
      breakpoints: {
        321: {perView: 1, focusAt: 0, startAt: 1},
        768: {perView: 2}
      }
    });

    glide.mount()
  }, []);
  return (
    <div className="carousel">
      <h2 className="carousel_title">Trending</h2>

      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides carousel_list">
            {data.map((item) => {
              if (item.isTrending) {
                return <CarouselPost data={item} key={item.title} />;
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
