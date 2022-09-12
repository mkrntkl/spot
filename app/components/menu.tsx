import React from "react";

type MenuProps = {
  children: React.ReactNode;
  variant: "vertical" | "horizontal";
};

const Menu = (props: MenuProps) => {
  const { children, variant } = props;
  let className: string[] = [];

  switch (variant) {
    case "horizontal":
      className.push("flex");
      break;
    default:
      break;
  }

  return (
    <ul id="list" className={"sm:flex"}>
      {children}
    </ul>
  );
};

export default Menu;
