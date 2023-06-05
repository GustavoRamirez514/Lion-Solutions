function Card({ data }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={data.imageUrl} alt="" />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-dorado-logo">
            <a>{data.category.name}</a>
          </p>
          <a href={data.href} className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900 border-b-2 border-white hover:border-dorado-logo transition duration-400 ease-in-out">
              {data.title}
            </p>
            <p className="mt-3 text-base text-gray-500">{data.description}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
