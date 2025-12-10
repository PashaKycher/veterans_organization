import { Link } from "react-router-dom";

const NavItem = ({ name, desc, path }) => {
  return (
    <div className="relative group flex items-center">
      <Link
        to={path}
        className="px-3 py-2 hover:text-primary transition"
      >
        {name}
      </Link>

      {/* Tooltip */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 top-full mt-2
          w-max max-w-xs
          bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg
          opacity-0 pointer-events-none
          group-hover:opacity-100 group-hover:pointer-events-auto
          transition-opacity duration-200
          z-50
        "
      >
        {desc}
      </div>
    </div>
  );
};

export default NavItem;