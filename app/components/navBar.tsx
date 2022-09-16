import React from "react";
import { useTranslation } from "react-i18next";
import { VscMenu, VscClose } from "react-icons/vsc";

import { useOptionalUser } from "~/utils";
import Collapse from "./collapse";
import Button from "./button";
import Menu from "./menu";
import { Link } from "@remix-run/react";

type NavBarProps = {};

const NavBar = (props: NavBarProps) => {
  const { t } = useTranslation();
  const user = useOptionalUser();

  const [collapsed, setCollapsed] = React.useState(true);

  const toggleNavMenu = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { label: "Profile" },
    { label: "Recipes", to: "/recipes" },
    { label: "Notes", to: "/notes" },
  ];

  return (
    <Collapse
      className={"max-h-[11.5rem] min-h-[4rem] shadow duration-300 sm:max-h-16"}
      collapsed={collapsed}
    >
      <nav className="container mx-auto flex h-16 shrink-0 items-center justify-between">
        <div className="flex items-center sm:space-x-4">
          <Link to={"/"} onClick={toggleNavMenu}>
            <img
              className="ml-4 inline min-w-[5rem] max-w-[5rem]"
              src="/spot.svg"
              alt=""
            />
          </Link>
          <div className="hidden overflow-hidden sm:block">
            <Menu variant="horizontal" onSelect={toggleNavMenu}>
              {menuItems}
            </Menu>
          </div>
        </div>
        <div className="flex-end ml-4 mr-2 flex w-max max-w-none space-x-4 sm:mr-4">
          {user ? (
            <Button variant="primary" to="/notes">
              {user.email}
            </Button>
          ) : (
            <>
              <Button to="/login" variant="primary">
                {t("user.login")}
              </Button>
              <Button to="/join" variant="secondary">
                {t("user.register")}
              </Button>
            </>
          )}
        </div>
        <div className="mr-4 sm:hidden">
          <Button variant="icon" onClick={toggleNavMenu}>
            {collapsed ? (
              <VscMenu className="min-w-[24px]" />
            ) : (
              <VscClose className="text-2xl" />
            )}
          </Button>
        </div>
      </nav>
      <Menu variant="vertical" className="ml-2 mr-2">
        {menuItems}
      </Menu>
    </Collapse>
  );
};

export default NavBar;
