import React, { FC } from "react";

export interface ToolbarProps {
  prop?: any;
}

const Toolbar: FC<ToolbarProps> = ({ prop }: ToolbarProps) => {
  return (
    <div className="h-14 bg-black-light text-white flex items-center justify-center">
      <span>Toolbar</span>
    </div>
  );
};

export default Toolbar;
