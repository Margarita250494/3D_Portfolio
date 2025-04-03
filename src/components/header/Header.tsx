import { useState } from "react";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { Navigation } from "./Navigation";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  return (
    <div
      className={`header__container wrapper ${isScrolled ? "scrolled" : "bg-transparent"}`}
    >
      <div className="header__inner">
        {/*logo*/}
        <Logo setIsScrolled={setIsScrolled} />
        {/*menu desctop*/}
        <Navigation isMobile={false} />
        {/*menu mobile */}
        <MobileNav />
      </div>
    </div>
  );
};
