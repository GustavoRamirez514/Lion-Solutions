import Card from "./Card";
import Carousel from "@itseasy21/react-elastic-carousel";

function List() {
  const posts = [
    {
      title: "Aplicación de seguimiento de problemas",
      href: "#",
      category: { name: "Diseño de producto" },
      description:
        "Haga que su rutina de trabajo sea simple y conveniente, diga adiós al estrés y al caos de administrar múltiples tareas y dé la bienvenida a un día de trabajo más productivo.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
    {
      title: "Aplicación de Hogar",
      href: "#",
      category: { name: "Investigación" },
      description:
        "El objetivo principal de la plataforma es ofrecer propiedades modernas, elegantes y de alto nivel en Europa y América del Sur.",
      imageUrl:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
    {
      title: "Aplicación Bo",
      href: "#",
      category: { name: "Diseño de producto" },
      description:
        "Bo es la forma más fácil de enviar a alguien el regalo perfecto en el momento perfecto. Regalar de manera simple, para que pueda concentrarse simplemente en las personas y los momentos que le importan.",
      imageUrl:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1, pagination:false },
    { width: 960, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1750, itemsToShow: 3, itemsToScroll: 2 },
    // { width: 1450, itemsToShow: 5 },
    // { width: 1750, itemsToShow: 6 },
  ];

  return (
    <div className="relative px-30 pt-12 sm:px-2 lg:px-36 lg:pb-20 ">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        {/* <div className="mx-auto mt-12 grid max-w-lg gap-32 lg:max-w-none lg:grid-cols-2"> */}
          <Carousel
            itemsToScroll={3}
            itemsToShow={3}
            breakPoints={breakPoints}
            pagination={false}
            itemPadding={[20, 50]}
          >
            {posts.map((post) => (
              <Card data={post} />
            ))}
          </Carousel>
        {/* </div> */}
      </div>
    </div>
  );
}

export default List;
