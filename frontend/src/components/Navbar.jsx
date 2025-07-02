import { BoxIcon, ShoppingBagIcon } from "lucide-react";
import React from "react";
import { useResolvedPath } from "react-router-dom";
import ThemeSelector from "./ThemeSelector";

const Navbar = () => {
  const { pathname } = useResolvedPath();
  const isHomePage = pathname === "/";

  return (
  <div className="z-50 navbar w-[80vw] mx-auto bg-base-300 min-h-[56px] flex-row justify-center sticky top-0 left-0 backdrop-blur-lg border-b border-base-content">
      <div className="flex-1 flex items-center">
        <BoxIcon/>
        <a className="btn btn-ghost text-xl">VOLTIVA</a>
      </div>

      <div className="flex items-center gap-4">
       <ThemeSelector/>
        {isHomePage && (
          <div className="indicator">
            <div className="p-2 rounded-full hover:bg-base-300 transition-colors">
              <ShoppingBagIcon className="size-5" />
              <span className="badge badge-sm badge-primary indicator-item">4
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
