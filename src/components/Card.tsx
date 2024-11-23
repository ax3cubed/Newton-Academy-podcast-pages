import { Episode } from "@/interfaces/episode";



const Card: React.FC<Episode> = ({description, title}) =>{
    return (
        <div className="max-w-xs mx-auto bg-gray-800 rounded-lg shadow-lg p-5 sm:max-w-sm md:max-w-md lg:max-w-lg h-64 flex flex-col transition-all hover:scale-105 hover:shadow-xl">
        <h2 className="mb-2 font-bold text-xl text-white">{title}</h2>
        <p className="mb-4 text-gray-300 flex-grow">
          {description}
        </p>
        <a
          href="#"
          className="text-blue-400 hover:text-blue-600 mt-auto font-medium underline transition-all"
        >
          Listen Now
        </a>
      </div>
      
    );
} 

export default Card;