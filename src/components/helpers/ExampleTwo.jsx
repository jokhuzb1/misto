import { Carousel, Typography } from "@material-tailwind/react";
import img1 from '../../assets/img/1.jpeg';
import img2 from '../../assets/img/2.jpg';
import img3 from '../../assets/img/main.jpg';
import { Link } from "react-router-dom";
export default function ExampleTwo({title, category}) {
  return (
    <div className="relative">
    <Carousel
        loop={true}
      className="max-h-[500px] btn type-tween "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={img3}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={img2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={img1}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
      <div className="card-title">
        <Typography>{title}</Typography>
         <Link to={category? category:'#' }> <p className={`${title ? "font-bold text-2xl px-2 sm:text-3xl":"text-lg"} text-nowrap tracking-widest`}>{category ? category :"Misto brand"}</p></Link>
      </div>
      </div>
  );
}