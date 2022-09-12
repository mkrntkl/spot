import React from "react";
import { useTranslation } from "react-i18next";
import { VscMenu, VscClose } from "react-icons/vsc";

import { useOptionalUser } from "~/utils";
import Collapse from "./collapse";
import Button from "./button";
import Menu from "./menu";

type NavBarProps = {};

const NavBar = (props: NavBarProps) => {
  const { t } = useTranslation();
  const user = useOptionalUser();

  const [collapsed, setCollapsed] = React.useState(true);

  const toggleNavMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Collapse
      className={"shadow duration-300 sm:max-h-16"}
      collapsed={collapsed}
    >
      <nav className="container mx-auto flex h-16 shrink-0 items-center justify-between">
        <div className="flex items-center sm:space-x-4">
          <img
            className="ml-4 inline min-w-[5rem] max-w-[5rem]"
            src="/spot.svg"
            alt=""
          />
          <div className="hidden overflow-hidden sm:block">
            <Menu variant="horizontal">
              {/** //TODO: avoid repetition */}
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </Menu>
          </div>
        </div>
        <div className="flex-end flex">
          <div className="flex-end mr-4 flex w-max max-w-none space-x-4">
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
            <div className="sm:hidden">
              <Button variant="icon" onClick={toggleNavMenu}>
                {collapsed ? (
                  <VscMenu className="min-w-[24px]" />
                ) : (
                  <VscClose className="text-2xl" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <Menu variant="vertical">
        {/** //TODO: avoid repetition */}
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </Menu>
    </Collapse>
  );
};

export default NavBar;
