import React from "react";

type CollapseProps = {
  children: React.ReactNode;
  collapsed: boolean;
  className?: string;
  minHeight?: number;
};

const Collapse = (props: CollapseProps) => {
  const { children, collapsed, className, minHeight = 16 } = props;

  const collapsedClass = [
    "transition-maxHeight overflow-hidden h-full",
    collapsed ? `max-h-${minHeight} ease-in` : "max-h-48 ease-out",
    className ?? "",
  ].join(" ");

  return <div className={collapsedClass}>{children}</div>;
};

export default Collapse;
