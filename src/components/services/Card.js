import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <div className="w-full  relative px-8 py-2 h-200 lg:h-[300pm] bg-white hover:shadow-xl hover:-translate-y-1 transition duration-400 ease-in-out ">
      <div className="w-full ">
        {data.icon}
        {/* <i className="bx bx-code-block bx-tada text-4xl text-gray-500"></i> */}
        <h2 className="text-xl font-semibold text-gray-900 pt-2">
          {data.title}
        </h2>
        <p className="text-lg font-regular text-gray-500 pt-4">
          {data.description}
        </p>
        <h2 className="items-end text-xl font-semibold text-gray-900 border-b-2 border-white hover:cursor-pointer py-4 pb-10 ">
          <Link to='/'>Leer Más &rarr;</Link> 
        </h2>
      </div>
    </div>
  );
}

export default Card;
