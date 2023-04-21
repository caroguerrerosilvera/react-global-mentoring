import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

export const OrMovieTile = ({ movie, onClick, onEdit, onDelete }) => {
  const [, setIsMenuOpen] = useState(false);

  function handleMenuOpen(event) {
    event.preventDefault();
    setIsMenuOpen(true);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  return (
    <div className="flex flex-col max-w-[320px] space-y-2" onClick={onClick}>
      <div className="relative">
        <Menu
          menuButton={
            <MenuButton
              aria-label="Open menu"
              className="absolute right-2 top-2 h-8 w-8 rounded-full bg-[#2A202D] text-white p-2 cursor-pointer"
              onClick={handleMenuOpen}
            >
              <BiDotsVerticalRounded />
            </MenuButton>
          }
          onClose={handleMenuClose}
          align="end"
          transition
          className="bg-slate-800 text-white"
          overflow="auto"
          portal
          id={`menu-${movie.title}`}
        >
          <MenuItem className="text-red" onClick={() => onEdit(movie)}>
            Edit
          </MenuItem>
          <MenuItem onClick={() => onDelete(movie)}>Delete</MenuItem>
        </Menu>
        <img
          className="h-[400px] w-full"
          src={movie.imageUrl}
          alt={movie.title}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col text-white space-y-2">
          <h3 className="font-normal opacity-70">{movie.title}</h3>
          <div className="text-xs font-light opacity-50">
            {movie.genres.join(", ")}
          </div>
        </div>
        <span className="text-white opacity-70 text-xs border border-gray-100 self-start py-0.5 px-2 rounded-sm">
          {movie.releaseYear}
        </span>
      </div>
    </div>
  );
};
