"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MobileDrawer } from "./MobileDrawer";
import { DesktopMenu } from "./DesktopMenu";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="lg:hidden">
      <Button onClick={toggleMobileMenu}>
        <AiOutlineMenu size={24} />
      </Button>
      {isMobileMenuOpen && (
        <MobileDrawer isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
      )}
    </div>
  );
};

export default MobileMenu;
