import React from "react";
import { Link } from "@remix-run/react";

type MenuProps = {
  children?:
    | React.ReactNode
    | {
        label: React.ReactNode;
        to?: string;
        onClick?: React.MouseEventHandler<HTMLElement>;
      }[];
  variant?: "vertical" | "horizontal";
  className?: string;
  onSelect?: Function;
};

const Menu = (props: MenuProps) => {
  const { children, variant = "vertical", className, onSelect } = props;
  let classArray = [];

  if (variant === "horizontal") {
    classArray.push("flex space-x-4");
  } else {
    classArray.push("divide-y");
  }

  if (className) {
    classArray.push(className);
  }

  const menuItemClass = "hover:bg-gray-50";

  const handleClick = () => {
    if (onSelect) onSelect();
  };

  return (
    <ul id="list" className={classArray.join(" ")}>
      {!Array.isArray(children)
        ? children
        : children.map((el, index) =>
            el.to ? (
              <li key={index} className={menuItemClass}>
                <Link
                  className="block h-full w-full indent-2 leading-9 hover:text-blue-main"
                  to={el.to}
                  onClick={handleClick}
                >
                  {el.label}
                </Link>
              </li>
            ) : (
              <li key={index} className={menuItemClass}>
                <button
                  className="h-full w-full text-left indent-2 leading-9 hover:text-blue-main"
                  onClick={handleClick}
                >
                  {el.label}
                </button>
              </li>
            )
          )}
    </ul>
  );
};

export default Menu;
