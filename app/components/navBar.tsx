import React from "react";
import { useTranslation } from "react-i18next";
import { VscMenu, VscClose } from "react-icons/vsc";

import { useOptionalUser } from "~/utils";
import Button from "./button";

type Props = {};

const NavBar = (props: Props) => {
  const { t } = useTranslation();
  const user = useOptionalUser();

  const [hidden, setHidden] = React.useState(false);

  const toggleNavMenu = () => {
    setHidden(!hidden);
  };

  return (
    <div className={"l mx-auto" + hidden ? " shadow" : ""}>
      <nav className="container mx-auto flex h-16 shrink-0 items-center justify-between">
        <div className="ml-4 flex items-center space-x-4">
          <img
            className="inline min-w-[5rem] max-w-[5rem]"
            src="/spot.svg"
            alt=""
          />
          <div className="hidden sm:block">MENU</div>
        </div>
        <div className="flex-end flex">
          <div className="flex-end mr-4 flex w-max max-w-none space-x-4">
            {user ? (
              <Button variant="primary" to="/notes">
                Logged in as {user.email}
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
                {!hidden ? (
                  <VscMenu className="min-w-[24px]" />
                ) : (
                  <VscClose className="text-2xl" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
