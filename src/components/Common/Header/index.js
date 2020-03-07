import React, { useState } from "react";
import GridRow from "arui-feather/grid-row";
import GridCol from "arui-feather/grid-col";
import { NavLink } from "react-router-dom";
import Edo from "../../../theme/images/logo-education.png";
import HeaderMenu from "../HeaderMenu";
import TopLink from "../TopLinks";
import AppBar from "../AppBar";
import Link from "arui-feather/link";
import HeaderMenuMobile from "../HeaderMenuMobile";
import "./styles.scss";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navTo = to => () => {
    setIsOpenMenu(false);
    navigationTo(to);
  };
  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <AppBar position={isOpenMenu ? "sticky" : "static"}>
        <TopLink />
        <div>
          <div className="section">
            <GridRow gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
              <GridCol width={{ mobile: 2, tablet: 3, desktop: 1 }}>
                <NavLink className="link link_third" to="/">
                  <img className="logo" src={Edo} alt="ЛадаМед" />
                </NavLink>
              </GridCol>
              <GridCol width={{ mobile: 2, tablet: 3, desktop: 3 }}>
                <div className="top-controls">
                  <div className="top-controls-menu desktop">
                    <Link
                      pseudo
                      onClick={handleClickMenu}
                      className={`menu-button ${
                        isOpenMenu ? "menu-button_close" : "menu-button_open"
                      }`}
                    >
                      {"Меню"}
                    </Link>
                  </div>
                </div>
              </GridCol>
            </GridRow>
          </div>
        </div>
      </AppBar>
      <HeaderMenu isOpen={isOpenMenu} navTo={navTo} onClose={handleClickMenu} />
    </>
  );
}

export default Header;
