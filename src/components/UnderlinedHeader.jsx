import React from "react";

const UnderlinedHeader = ({ text = "" }) => {
  const initial = text.slice(0, 1);
  const middle = text.slice(1, text.length - 2);
  const final = text.substring(text.length - 2, text.length);
  return (
    <h2 className="text-center  text-[1.2rem] md:text-[1.6rem] font-semibold text-red-900">
      {initial}
      <span className="border-b-3 pb-1">{middle}</span>
      {final}
    </h2>
  );
};

export default UnderlinedHeader;
