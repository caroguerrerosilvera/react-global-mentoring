import { Meta } from "@storybook/react";
import AtButton from "./AtButton";

export default {
  title: "Atoms/AtButton",
  component: AtButton,
} as Meta;

const Template = (args) => <AtButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Click me",
};

export const WithCustomsStyles = Template.bind({});
WithCustomsStyles.args = {
  className: "bg-red-500 text-white",
  children: "Click me",
};
