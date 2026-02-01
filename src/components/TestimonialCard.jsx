import Image from "next/image";
import React from "react";

const TestimonialCard = () => {
  return (
    <div>
      <div className="flex gap-3 min-w-[60vw] justify-center items-center ">
        <div className="testimonial-text w-[30%]">
          <blockquote className="font-semibold pb-4">
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            hic voluptatem laudantium saepe sed enim aspernatur cum at inventore
            aperiam?"
          </blockquote>
            <cite>Mariam Agaba, OAU</cite>
        </div>
        <div className="testimonial-image backdrop-blur">
            <Image src="/hero.png" alt="mariam-adeagbo-pic" width={200} height={100}/>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
