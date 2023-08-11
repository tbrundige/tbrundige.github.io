import React from "react";
import Typewriter from "typewriter-effect";

export default function Showcase() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Full Stack",
          "Salesforce",
          "Cloud Computing",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
