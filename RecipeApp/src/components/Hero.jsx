import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-[28rem] rounded-xl overflow-hidden shadow-lg">
        <img
          className="w-full h-full object-cover"
          src="https://img.freepik.com/free-photo/top-close-up-view-chicken-chicken-wings-with-potatoes-herbs-tomatoes-lemon-fork-knife_140725-72557.jpg?t=st=1756497492~exp=1756501092~hmac=65a21fc7c7406ffd62c4ce2f12f62185470557f50f29bdade3eff7900fa19936&w=1480"
          alt="Delicious food"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent"></div>

        <div className="absolute bottom-10 left-10 max-w-xl">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-xl">
            It's All About <span className="text-amber-400">Good Food</span> &
            Taste
          </h1>
          <p className="mt-4 text-gray-200 text-lg leading-relaxed">
            Every recipe tells a story, blending flavors that warm the heart and
            spark joy. Discover the art of cooking where passion meets taste,
            and every bite is a memory in the making.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
