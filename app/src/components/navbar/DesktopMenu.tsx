"use client";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const DesktopMenu = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="flex space-x-8">
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/"
            className={`${
              pathname === "/" ? "text-blue-500 font-semibold" : ""
            } hover: text-gray-600`}
          >
            Notícias
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/about"
            className={`${
              pathname === "/about" ? "text-blue-500 font-semibold" : ""
            } hover: text-gray-600`}
          >
            Sobre nós
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/contact"
            className={`${
              pathname === "/contact" ? "text-blue-500 font-semibold" : ""
            } hover: text-gray-600`}
          >
            Contato
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export { DesktopMenu };
