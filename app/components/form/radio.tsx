import React from "react";

type RadioProps = {
  children: React.ReactNode;
  defaultChecked?: boolean;
  name: string;
};

const Radio = (props: RadioProps) => {
  const { children, name, defaultChecked = false } = props;
  return (
    <label className="inline-flex items-center">
      <input
        type="radio"
        name={name}
        className="h-4 w-4 text-red-600"
        defaultChecked={defaultChecked}
      />
      <span className="ml-2 text-gray-700">{children}</span>
    </label>
  );
};

export default Radio;
