import React from "react";
import { Link, type LinkProps } from "@remix-run/react";

type ButtonProps = {
  children?: React.ReactNode;
  to?: LinkProps["to"];
  // className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  variant: "primary" | "secondary" | "icon";
};

const Button = (props: ButtonProps) => {
  const { children, to, onClick, variant } = props;

  let variantClass = "";
  let labelClass = "text-sm";

  switch (variant) {
    case "secondary":
      variantClass =
        "bg-blue-main hover:bg-blue-dark text-white shadow-sm px-4 py-3";
      break;
    case "icon":
      variantClass = "bg-white hover:bg-blue-light px-2 py-3";
      labelClass = "text-md";
      break;
    default:
      variantClass =
        "border border-gray-300/50 bg-white hover:bg-blue-light text-blue-dark shadow-sm px-4 py-3";
      break;
  }

  const className =
    variantClass +
    " flex items-center justify-center rounded-md " +
    " transition transition-all duration-300" +
    " font-medium text-center max-h-9";

  return to ? (
    <Link to={to} onClick={onClick} className={className}>
      <div className={labelClass}>{children}</div>
    </Link>
  ) : (
    <button onClick={onClick} className={className}>
      <div className={labelClass}>{children}</div>
    </button>
  );
};

export default Button;
