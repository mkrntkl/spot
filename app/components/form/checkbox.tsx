import React from "react";

type CheckboxProps = {
  children: React.ReactNode;
  name: string;
};

const Checkbox = (props: CheckboxProps) => {
  const { children, name } = props;
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox" //TODO: customize look with icons
        name={name}
        className="mt-[2px] h-4 w-4 checked:bg-blue-light focus:outline-none"
      />
      <span className="text-gray-700">{children}</span>
    </label>
  );
};

export default Checkbox;
