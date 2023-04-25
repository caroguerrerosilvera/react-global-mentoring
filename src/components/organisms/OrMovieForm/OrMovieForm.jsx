import { AtButton, AtInput } from "components/atoms";

export const OrMovieForm = ({ movieInfo, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const movie = Object.fromEntries(formData.entries());
    movie.rating = Number(movie.rating);

    onSubmit?.(movie);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-5 gap-x-4 gap-y-7">
        <label className="col-span-3 flex flex-col space-y-2">
          <span className="text-red-500">TITLE</span>
          <AtInput
            id="title"
            className="w-full h-[40px] text-slate-50 bg-[#323232]/95 rounded-md focus:outline-none px-3"
            type="text"
            name="title"
            defaultValue={movieInfo?.title}
          />
        </label>

        <label className="col-span-2 flex flex-col space-y-2" htmlFor="release">
          <span className="text-red-500">RELEASE YEAR</span>
          <AtInput
            id="release"
            className="w-full h-[40px] text-slate-50 bg-[#323232]/95 rounded-md focus:outline-none px-3"
            type="text"
            name="releaseYear"
            defaultValue={movieInfo?.releaseYear}
          />
        </label>

        <label className="col-span-3 flex flex-col space-y-2" htmlFor="cover">
          <span className="text-red-500">COVER URL</span>
          <AtInput
            id="cover"
            className="w-full h-[40px] text-slate-50 bg-[#323232]/95 rounded-md focus:outline-none px-3"
            type="text"
            name="imageUrl"
            placeholder="https://"
            defaultValue={movieInfo?.imageUrl}
          />
        </label>

        <label className="col-span-2 flex flex-col space-y-2" htmlFor="rating">
          <span className="text-red-500">RATING</span>
          <AtInput
            id="rating"
            className="w-full h-[40px] text-slate-50 bg-[#323232]/95 rounded-md focus:outline-none px-3"
            type="text"
            name="rating"
            defaultValue={movieInfo?.rating}
          />
        </label>

        <label className="col-span-3 flex flex-col space-y-2" htmlFor="genres">
          <span className="text-red-500">GENRES</span>
          <AtInput
            id="genres"
            className="w-full h-[40px] text-slate-50 bg-[#323232]/95 rounded-md focus:outline-none px-3"
            type="text"
            name="genres"
            defaultValue={movieInfo?.genres.join(",")}
          />
        </label>

        <label className="col-span-2 flex flex-col space-y-2" htmlFor="runtime">
          <span className="text-red-500">RUNTIME</span>
          <AtInput
            id="runtime"
            className="w-full h-[40px] text-slate-50 bg-[#323232]/95 rounded-md focus:outline-none px-3"
            type="text"
            name="runtime"
            placeholder="minutes"
            defaultValue={movieInfo?.runtime}
          />
        </label>
      </div>

      <div className="pt-8">
        <label className="w-full" htmlFor="overview">
          <span className="text-red-500">OVERVIEW</span>
          <textarea
            id="overview"
            className="w-full h-32 text-slate-50 bg-[#323232]/95 rounded-md focus:outline-none p-3"
            name="overview"
            defaultValue={movieInfo?.overview}
          />
        </label>
      </div>

      <div className="flex space-x-4 justify-end pt-5">
        <AtButton
          type="submit"
          className="p-2 border border-red-500 text-red-500 px-5 py-3 rounded-sm"
        >
          Reset
        </AtButton>
        <AtButton
          type="submit"
          className="p-2 bg-red-500 text-white px-5 py-3 rounded-sm"
        >
          Submit
        </AtButton>
      </div>
    </form>
  );
};
