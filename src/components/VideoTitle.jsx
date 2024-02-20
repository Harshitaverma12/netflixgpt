import React from "react";
import EmojiPicker from "emoji-picker-react";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-full aspect-video pt-[15%] px-36 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg px-10 w-1/3">{overview}</p>
      <div className="flex ">
        <button className="bg-white mx-6 text-black py-2 w-40 px-10 rounded-lg text-lg hover:opacity-80 ">
          Play
        </button>
        <button className="bg-gray-500 text-white w-40 py-2 px-10 flex text-lg bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
