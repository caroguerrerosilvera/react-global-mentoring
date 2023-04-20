import { MlSearchForm } from "./MlSearchForm";

export default {
  title: "Molecules/MlSearchForm",
  component: MlSearchForm,
};

const Template = (args) => <MlSearchForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSearch: (query) => console.log(`Searched for: ${query}`),
};

export const InitialValue = Template.bind({});
InitialValue.args = {
  initialSearchQuery: "Harry Potter",
  onSearch: (query) => console.log(`Searched for: ${query}`),
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  placeholder: "Search by title or author",
  onSearch: (query) => console.log(`Searched for: ${query}`),
};

export const NoSearchHandler = Template.bind({});
NoSearchHandler.args = {
  initialSearchQuery: "Harry Potter",
};
