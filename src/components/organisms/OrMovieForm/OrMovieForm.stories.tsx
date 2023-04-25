import { Meta } from "@storybook/react";
import { OrMovieForm } from "./OrMovieForm";

export default {
  title: "Organisms/OrMovieForm",
  component: OrMovieForm,
} as Meta;

const Template = (args) => (
  <div className="bg-neutral-800 p-6">
    <OrMovieForm {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  movieInfo: undefined,
  onSubmit: (data) => console.log(data),
};

export const WithInformation = Template.bind({});
WithInformation.args = {
  movieInfo: {
    title: "Harry Potter 1",
    releaseYear: 2001,
    imageUrl:
      "https://es.web.img3.acsta.net/c_310_420/pictures/14/04/30/11/55/592219.jpg",
    rating: 8.8,
    genres: ["Fantasy", "Adventure", "Family"],
    runtime: "2h 32min",
    overview:
      "Harry Potter es un niño huérfano criado por su tío Vernon y su tía Petunia que lo odian. Desde que era pequeño, estos siempre le han contado que sus padres murieron en un accidente de coche. El día de su decimoprimer cumpleaños, Harry recibe la inesperada visita de un hombre gigantesco de nombre Rubeus Hagrid. Este le revela que es, de hecho, hijo de dos poderosos magos y que él también posee extraordinarios poderes. Lleno de alegría, el chico acepta ir a estudiar a Hogwarts, el famoso colegio de magia y hechicería. Por fin, tiene la oportunidad de hacer amigos. Odiado por Severus Snape, profesor de Pociones, y protegido por Albus Dumbledore, director del colegio, Harry intentará dilucidar el misterio de la piedra filosofal.",
  },
  onSubmit: (data) => console.log(data),
};
