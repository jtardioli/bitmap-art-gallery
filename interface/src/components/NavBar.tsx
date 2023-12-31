import React from "react";
import BitmapLogo from "./BitmapLogo";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav
      className={`flex w-full h-32   items-center px-3 sm:p-12 bg-black text-slate-100 justify-between fixed z-10`}
    >
      <Link href="/">
        <div className="flex items-center gap-8 cursor-pointer sm:gap-6">
          <BitmapLogo />
          <div className="text-xl font-medium tracking-wider uppercase">
            <p>Interstellar</p>
            <p>Gallery of</p>
            <p>Bitmap Art</p>
          </div>
        </div>
      </Link>

      <div className="flex items-center justify-between w-[400px] m-6 sm:m-12">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/gallery" className="hover:underline">
          Gallery
        </Link>
        <Link href="/studio" className="hover:underline">
          Studio
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
