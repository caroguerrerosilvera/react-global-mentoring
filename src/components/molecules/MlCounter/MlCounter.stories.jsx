import { MlCounter } from "./MlCounter";

export default {
  title: "Components/MlCounter",
  component: MlCounter,
  args: {
    initialValue: 0,
  },
};

const Template = (args) => <MlCounter {...args} />;

export const DefaultState = Template.bind({});
