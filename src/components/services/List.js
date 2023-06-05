import Card from "components/services/Card";

function List({ posts, data }) {
  return (
    <div className="relative bg-white px-4 pt-10 pb-10 sm:px-6 lg:px-8 lg:pt-15 lg:pb-20">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-left">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
            {data}
          </h2>
        </div>
        <div className="mx-20 mt-16 grid max-w-lg gap-16 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Card data={post}></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default List;
