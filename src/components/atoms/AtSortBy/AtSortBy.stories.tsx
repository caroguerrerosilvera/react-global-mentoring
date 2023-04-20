import { Meta } from "@storybook/react";
import { AtSortBy } from "./AtSortBy";

export default {
  title: "Atoms/AtSortBy",
  component: AtSortBy,
} as Meta;

const Template = (args) => <AtSortBy {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Sort by",
  id: "sort-by",
  currentValue: "release-date",
  handleChange: (value) => console.log(value),
  options: [
    { label: "Release Date", value: "release-date" },
    { label: "Title", value: "title" },
  ],
  styles: {
    label: "text-lg font-medium text-gray-700",
    options: "py-2 px-4 bg-gray-200 rounded-md px-2",
  },
};
