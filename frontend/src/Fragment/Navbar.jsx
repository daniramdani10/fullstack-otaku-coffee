import { List, MagnifyingGlass, ShoppingCart } from "@phosphor-icons/react";
import TableCart from "./TableCart";
import { Link } from "react-router-dom";

const Navbar = ({ products }) => {
  return (
    <div className="flex flex-col bg-neutral text-white shadow-sm font-bold p-5 gap-3 ">
      <div className="flex gap-5 items-center w-full justify-between">
        <button className="btn btn-sm">
          <List size={18} />
        </button>
        Otaku Coffee
        <div className="indicator">
          <span className="indicator-item text-xs bg-red-400 px-[5px] rounded-full">
            10
          </span>
          <Link to={"/cart"} className="btn btn-sm">
            <ShoppingCart size={18} />
          </Link>
        </div>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-md p-1 w-full font-light text-xs bg-neutral "
        />
        <MagnifyingGlass size={18} className="absolute top-1 right-2" />
      </div>
    </div>
  );
};

export default Navbar;
