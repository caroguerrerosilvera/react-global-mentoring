import { Meta } from "@storybook/react";
import { AtInput } from "./AtInput";

export default {
  title: "Atoms/AtInput",
  component: AtInput,
} as Meta;

const Template = (args) => <AtInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Type something",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Input Label",
  placeholder: "Type something",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  placeholder: "Type your password",
};
