"use client";

import Link from "next/link";

import MobileMenu from "./navbar/MobileMenu";

import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import { Button } from "./ui/button";
import { DesktopMenu } from "./navbar/DesktopMenu";

const Navbar = () => {
  const { isDarkMode, toggleTheme }: any = useContext(ThemeContext);

  return (
    <header
      className={`w-full py-4 dark:bg-gray-900 dark:text-white bg-white text-gray-900 shadow-md transition-colors duration-300`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="text-xl font-bold">
          <Link href="/">Invest News</Link>
        </div>
        <DesktopMenu />
        <div className="hidden lg:flex items-center space-x-4">
          <Button
            onClick={toggleTheme}
            size="icon"
            className="dark:bg-white dark:text-gray-900 rounded-full"
          >
            {isDarkMode ? <AiOutlineSun /> : <AiOutlineMoon />}
          </Button>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;
