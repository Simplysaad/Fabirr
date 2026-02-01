import React from "react";

const Footer = () => {
  return (
    // to-red-400 from-red-300 bg-gradient-to-r
    <footer style={{
      position: ""
    }} className="mt-64 border-t relative left-[5%] bottom-0 w-[90%] text-red-400 text-[.9rem] py-4">
      &copy;{new Date().getFullYear()} FABIRR. All Rights Reserved.
    </footer>
  );
};

export default Footer;


// import React from "react";

// const Footer = () => {
//   return (
//     // to-red-400 from-red-300 bg-gradient-to-r
//     <footer className="mt-64 border-t absolute left-[5%] bottom-0 w-[90%] px-16  text-center text-red-400 text-[.9rem] py-4">
//       &copy;{new Date().getFullYear()} FABIRR. All Rights Reserved.
//     </footer>
//   );
// };

// export default Footer;
