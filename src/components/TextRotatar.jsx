import React from "react";

import Typewriter from "typewriter-effect";

const TextRotatar = () => {
  return (
    <h1 className="flex gap-2 text-3xl font-semibold justify-center items-center ">
      <span className=" text-center">
        <Typewriter
          options={{
            strings: [
              "Software Engineer",
              "Front End Developer",
              "Rect Developer",
            ],
            autoStart: true,

            loop: true,
            wrapperClassName: "blue-gradient_text",
            cursorClassName: "blue-gradient_text",
          }}
        />
      </span>
    </h1>
  );
};

export default TextRotatar;
