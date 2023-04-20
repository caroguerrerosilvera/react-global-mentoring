export const MlMovieDetails = ({
  imageUrl,
  title,
  genres,
  releaseYear,
  rating,
  duration,
  description,
}) => {
  return (
    <div className="flex space-x-8 items-start">
      <img className="max-w-[320px] max-h-[420px]" src={imageUrl} alt={title} />
      <div>
        <div className="flex items-start space-x-4">
          <h2 className="text-white uppercase font-light text-[40px]">
            {title}
          </h2>
          <p className="flex items-center justify-center text-white font-medium text-[14px] border border-white rounded-full p-2 h-10 w-10 mt-2">
            {rating}
          </p>
        </div>
        <div className="text-xs font-light opacity-50 text-white">
          {genres.join(", ")}
        </div>
        <div className="flex font-light mt-8 text-[22px] text-red-400 space-x-10">
          <span>{releaseYear}</span>
          <span>{duration}</span>
        </div>
        <p className="mt-8 text-[16px] font-extralight opacity-50 text-white">
          {description}
        </p>
      </div>
    </div>
  );
};
