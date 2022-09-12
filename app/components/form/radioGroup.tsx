import React from "react";

type RadioGroupProps = {
  children: React.ReactNode;
  legend?: string;
  direction?: "column" | "row";
};

const RadioGroup = (props: RadioGroupProps) => {
  const { children, legend, direction = "column" } = props;

  let className =
    direction === "column"
      ? "flex flex-row items-center gap-4 m-2"
      : "flex flex-col gap-1 m-2";

  return (
    <fieldset className={className}>
      <legend className="mb-3">{legend}</legend>
      {children}
    </fieldset>
  );
};

export default RadioGroup;
