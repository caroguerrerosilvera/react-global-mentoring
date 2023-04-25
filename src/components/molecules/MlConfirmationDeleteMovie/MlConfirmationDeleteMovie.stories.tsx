import { MlConfirmationDeleteMovie } from "./MlConfirmationDeleteMovie";
import { action } from "@storybook/addon-actions";

const movieMock = {
  title: "Alien",
};

export default {
  title: "Molecules/MlConfirmationDeleteMovie",
  component: MlConfirmationDeleteMovie,
};

const Template = (args) => {
  return (
    <div className="bg-slate-800 p-10">
      <MlConfirmationDeleteMovie {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  movie: movieMock,
  handleDelete: (movie: any) => {
    action("delete")(movie);
  },
};
