import Link from "next/link";
import { AiOutlineClose, AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import { Switch } from "../ui/switch";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}
const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  const { isDarkMode, toggleTheme }: any = useContext(ThemeContext);
  return (
    <div
      className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button className="absolute right-7 top-4 p-3" onClick={onClose}>
        <AiOutlineClose size={24} />
      </button>
      <ul className="flex flex-col justify-center items-center space-y-4">
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Link onClick={onClose} href="/">
            Notícias
          </Link>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Link onClick={onClose} href="/about">
            Sobre nós
          </Link>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Link onClick={onClose} href="/contact">
            Contato
          </Link>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <div onClick={toggleTheme} className="flex items-center">
            <Switch checked={isDarkMode} className="mr-2" />
            {isDarkMode ? <AiOutlineSun /> : <AiOutlineMoon />}
          </div>
        </li>
      </ul>
    </div>
  );
};

export { MobileDrawer };
