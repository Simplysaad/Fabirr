import Image from "next/image";
import React from "react";

const TestimonialCard = ({
  text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates hic voluptatem laudantium saepe sed enim aspernatur cum at inventore aperiam?",
  author = "Mariam Agaba",
  school = "OAU",
  image = "/hero.png"
}) => {
  return (
    <div>
      <div className="snap-center flex gap-3 not-md:min-w-[90vw] md:w-[60vw] justify-center items-center ">
        <div className="testimonial-text w-[80%] md:w-[60%] []">
          <blockquote className="pb-4">{text}</blockquote>
          <cite className="">
            - {author}
            {school ? `, ${school.toUpperCase()}` : ""}
          </cite>
        </div>
        <div className="testimonial-image backdrop-blur">
          <Image
            src={image}
            alt="mariam-adeagbo-pic"
            width={200}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
