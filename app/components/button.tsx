import React from "react";
import { Link, type LinkProps } from "@remix-run/react";

type ButtonProps = {
  children?: React.ReactNode;
  to?: LinkProps["to"];
  // className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  variant?: "primary" | "secondary";
};

const Button = (props: ButtonProps) => {
  const { children, to, onClick, variant } = props;

  let variantClass = "";

  switch (variant) {
    case "secondary":
      variantClass = "bg-blue-main hover:bg-blue-dark text-white";
      break;
    default:
      variantClass =
        "border border-gray-300/50 bg-white hover:bg-blue-light text-blue-dark";
      break;
  }

  const className =
    variantClass +
    " flex items-center justify-center rounded-md px-4 py-3" +
    " shadow-sm transition transition-all duration-300" +
    " font-medium text-center ";

  const labelClass = "text-sm";

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
