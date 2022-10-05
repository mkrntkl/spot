import React from "react";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";

type MenuProps = {
  children?:
    | React.ReactNode
    | {
        label: string;
        to?: string;
        onClick?: React.MouseEventHandler<HTMLElement>;
      }[];
  variant?: "vertical" | "horizontal";
  className?: string;
  onSelect?: Function;
};

const Menu = (props: MenuProps) => {
  const { children, variant = "vertical", className, onSelect } = props;

  const { t } = useTranslation();

  let classArray = [];

  if (variant === "horizontal") {
    classArray.push("flex space-x-4");
  } else {
    classArray.push("divide-y");
  }

  if (className) {
    classArray.push(className);
  }

  const menuItemClass = "hover:bg-gray-50 sm:rounded-md";

  const handleClick = () => {
    if (onSelect) onSelect();
  };

  return (
    <ul id="list" className={classArray.join(" ")}>
      {!Array.isArray(children)
        ? children
        : children.map((el, index) => (
            <li key={index} className={menuItemClass}>
              {el.to ? (
                <Link
                  className="block h-full w-full leading-9 hover:text-blue-main"
                  to={el.to}
                  onClick={handleClick}
                >
                  <div className="ml-2 mr-2">{t(el.label)}</div>
                </Link>
              ) : (
                <button
                  className="h-full w-full text-left leading-9 hover:text-blue-main"
                  onClick={handleClick}
                >
                  <div className="ml-2 mr-2">{t(el.label)}</div>
                </button>
              )}
            </li>
          ))}
    </ul>
  );
};

export default Menu;
