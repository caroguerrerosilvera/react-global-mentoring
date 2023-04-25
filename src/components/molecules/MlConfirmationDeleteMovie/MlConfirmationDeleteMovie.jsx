import { AtButton } from "components/atoms";

export function MlConfirmationDeleteMovie({ movie, handleDelete }) {
  return (
    <div className="space-y-8 flex flex-col">
      <p className="text-slate-50 text-lg">
        Are you sure you want to delete {movie?.title}?
      </p>
      <AtButton
        className="p-2 bg-red-500 text-white px-5 py-3 rounded-sm self-end"
        onClick={() => handleDelete?.(movie)}
      >
        CONFIRM
      </AtButton>
    </div>
  );
}
