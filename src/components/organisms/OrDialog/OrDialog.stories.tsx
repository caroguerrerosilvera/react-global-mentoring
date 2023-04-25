import { action } from "@storybook/addon-actions";
import { OrDialog } from "./OrDialog";

export default {
  title: "Organisms/OrDialog",
  component: OrDialog,
};

const Template = (args) => {
  return <OrDialog {...args} open={true} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Default Dialog Title",
  children: (
    <>
      <p>This is the default dialog content</p>
      <p>You can customize it with any children you want!</p>
    </>
  ),
  onClose: () => action("Dialog closed")(),
};
