import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-16 md:my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-center">
        Create AI Images
      </h1>
      <p className="text-gray-500 mb-8 text-center">
        Turn Your Imagination Into Visuals
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
        <img
          src={assets.sample_img_1}
          className="w-full max-w-md md:w-80 lg:w-96 rounded-lg ipad:w-72 ipad:max-w-none"
          alt="AI Generated Image"
        />
        <div className="max-w-xl ipad:max-w-md">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            Introducing the AI-Powered Text To Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Easily bring your ideas to life with our free AI image generator.
            Whether you need stunning visuals or unique imagery, our tool
            transforms your text into eye-catching images with just a few
            clicks. Imagine it, describe it, and watch it come to life
            instantly.
          </p>
          <p className="text-gray-600">
            Simply type in a text prompt, and our cutting-edge AI will generate
            high-quality images in seconds. From product visuals to character
            designs and portraits, even concepts that don't yet exist can be
            visualized effortlessly. Powered by advanced AI technology, the
            creative possibilities are limitless!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
