const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{original_title}</h1>
      <p className="py-6 text-md w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-6 text-xl rounded-md hover:bg-opacity-70">
          ▷ Play
        </button>
        <button className="mx-2 bg-gray-400 text-white p-2 px-6 text-xl bg-opacity-60 rounded-md hover:bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
