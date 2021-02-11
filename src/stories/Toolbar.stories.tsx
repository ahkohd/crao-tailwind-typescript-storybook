import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Toolbar, { ToolbarProps } from "@/components/Toolbar";

export default {
  title: "Menus/Toolbar",
  component: Toolbar,
} as Meta;

const Template: Story<ToolbarProps> = (args) => <Toolbar {...args} />;

export const DefaultToolbar = Template.bind({});

DefaultToolbar.args = {};
