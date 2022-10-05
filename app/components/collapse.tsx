import React from "react";

type CollapseProps = {
  children: React.ReactNode;
  collapsed: boolean;
  className?: string;
};

const Collapse = (props: CollapseProps) => {
  const { children, collapsed, className } = props;

  const collapsedClass = [
    "overflow-hidden transition-maxHeight",
    collapsed ? "max-h-0" : "max-h-screen",
    className ?? "",
  ].join(" ");

  return <div className={collapsedClass}>{children}</div>;
};

export default Collapse;
