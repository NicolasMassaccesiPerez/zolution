import { useRef, useState } from "react";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [settingsMenu, setSettingsMenu] = useState(false);

  const barsRef = useRef();
  const navToggledRef = useRef();
  const settingsRef = useRef();
  const settingsMenuRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== barsRef.current && e.target !== navToggledRef.current) {
      setMobileNavbar(false);
    }
  });

  window.addEventListener("click", (e) => {
    if (
      e.target !== settingsRef.current &&
      e.target !== settingsMenuRef.current
    ) {
      setSettingsMenu(false);
    }
  });

  return (
    <Navbar
      mobileNavbar={mobileNavbar}
      setMobileNavbar={setMobileNavbar}
      barsRef={barsRef}
      navToggledRef={navToggledRef}
      settingsMenu={settingsMenu}
      setSettingsMenu={setSettingsMenu}
      settingsRef={settingsRef}
      settingsMenuRef={settingsMenuRef}
    />
  );
};

export default NavbarContainer;
