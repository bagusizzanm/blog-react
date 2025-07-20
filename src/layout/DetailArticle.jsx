import { Link, useParams } from "react-router";
import { ArrowLeft, Calendar, LoaderCircle, UserRoundPen } from "lucide-react";
import RightPanel from "./RightPanel.jsx";
import { useBlogById } from "../controllers/useBlog.js";
import Comments from "../components/Comments.jsx";

const DetailArticle = () => {
  const { id } = useParams();
  const { article, loading, error } = useBlogById(id);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoaderCircle className="animate-spin w-12 h-12 text-blue-500" />
      </div>
    );
  if (error) return <p className="p-6 text-center text-red-500">{error}</p>;

  return (
    <>
      <Link to="/" className="mt-18 w-fit">
        <button className="cursor-pointer bg-slate-100 px-3 py-2 rounded text-slate-500 hover:bg-zinc-200 hover:text-slate-600 transition-all duration-300">
          <ArrowLeft size={20} />
        </button>
      </Link>
      <section className="flex flex-col xl:flex-row xl:gap-5">
        <div className="xl:flex justify-between">
          <div className="xl:w-2/3">
            <h1 className="text-2xl md:text-5xl w-full font-bold mb-5">
              {article.title}
            </h1>
            <img
              src={article.img}
              alt={article.title}
              className="rounded-lg shadow-sm w-3xl object-cover"
            />
            <p className="italic text-slate-500 text-xs">
              Source : {article.img.toString()}
            </p>

            <div className="flex justify-start items-center gap-2 text-gray-600 mt-5">
              <div className="flex gap-2 jusify-center items-center">
                <UserRoundPen size={20} />
                <p className="text-xs text-start md:text-md">
                  {article.author}
                </p>
              </div>
              <div className="flex gap-2 jusify-center items-center">
                <Calendar size={20} />
                <p className="text-xs text-start md:text-md">{article.date}</p>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-slate-600 text-md md:text-base leading-normal">
                {article.content}
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-100 text-sm text-slate-500 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <div className="my-5 border-t border-zinc-200"></div>
            <Comments />
          </div>
          <RightPanel className="lg:w-full" />
        </div>
        {/* divider */}
      </section>
    </>
  );
};

export default DetailArticle;
