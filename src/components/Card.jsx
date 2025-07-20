import { Link } from "react-router";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { useState } from "react";

const Card = ({ title, content, img, tags, className, loading, link }) => {
  const [imageLoading, setImageLoading] = useState(false);

  return (
    <div className={`card flex flex-col gap-auto md:py-3 w-[412px] ${className}`}>
      {loading ? (
        <LoaderCircle className="animate-spin w-8 h-8 text-blue-500" />
      ) : (
        <img
          src={img}
          alt="image-thumbnail"
          className={`rounded shadow object-cover w-full md:h-48 transition-opacity duration-300 ease-in ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setImageLoading(false)}
          onError={() => setImageLoading(false)}
        />
      )}
      <h1 className="font-bold text-md">{title && title}</h1>
      <p className={`text-sm text-slate-600 ${className}`}>{content}</p>
      <div className="flex flex-wrap items-center">
        {tags &&
          tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm text-slate-600 bg-stone-200/50 px-2 py-1 mt-1 mr-2 rounded">
              {" "}
              {tag}
            </span>
          ))}
      </div>
      <div className="flex items-center text-blue-500 hover:text-blue-700 cursor-pointer gap-2 font-semibold transition-transform w-fit">
        <Link to={link} className="text-sm">
          Selengkapnya
        </Link>
        <ArrowRight size={16} />
      </div>
    </div>
  );
};

export default Card;
