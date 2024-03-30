import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import bread from "/src/assets/bread.png";
import salad from "/src/assets/salad-bowl.png";
import chicken from "/src/assets/chicken.png";
import coffee from "/src/assets/coffee.png";

const Recipe = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#plate img",
      {
        x: "-600%",
      },
      {
        x: "0",
        yoyoEase: true,
        duration: 3,
        ease: "none",
        scrollTrigger: {
          trigger: "#plate",
          // start: "top center",
          // end: "bottom center",
          toggleActions: "restart pause resume none",
        },
      }
    );
  }, []);

  return (
    <div className=" overflow-hidden flex justify-center items-center p-6 lg:p-12 ">
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6  w-full place-items-center"
        id="plate"
      >
        <img
          src={bread}
          alt="Salad"
          className="w-96 p-6  h-full  object-fill  bg-[#BC6C25]"
        />
        <img
          src={salad}
          alt="Fries"
          className="w-96 object-fill  h-full  bg-[#BC6C25]"
        />
        <img
          src={chicken}
          alt="Beef Plating"
          className="w-96 p-6  h-full  object-fill   bg-[#BC6C25]"
        />
        <img
          src={coffee}
          alt="Fried Food"
          className="w-96 p-6  h-full  object-fill  bg-[#BC6C25]"
        />
      </div>
    </div>
  );
};

export default Recipe;
