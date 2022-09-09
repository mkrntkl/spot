import React from "react";
import { useTranslation } from "react-i18next";
import { useOptionalUser } from "~/utils";
import Button from "./button";

type Props = {};

const NavBar = (props: Props) => {
  const { t } = useTranslation();
  const user = useOptionalUser();

  return (
    <div className="container mx-auto flex">
      <div className="w-1/6">LOGO</div>
      <div className="w-3/6">MENU</div>
      <div className="w-2/6">
        {user ? (
          <Button to="/notes">Logged in as {user.email}</Button>
        ) : (
          <div className="flex py-4">
            <Button to="/login" variant="primary">
              {t("user.login")}
            </Button>
            <Button to="/join" variant="secondary">
              {t("user.register")}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
