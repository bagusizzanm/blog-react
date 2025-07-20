import {
  ArrowRight,
  Calendar,
  Clock,
  LoaderCircle,
  Quote,
  UserRoundPen,
} from "lucide-react";
import Card from "./Card";
import { useBlog } from "../controllers/useBlog";
import { Link } from "react-router";

const Hero = () => {
  const { blogs, loading } = useBlog();

  const singleContent = blogs[0] || null;
  const newBlogs = blogs.slice(1, 5);
  return (
    <div className="rounded-md">
      <div className="flex flex-col">
        <div className="w-full">
          {
            // only get 1 blog
            singleContent && (
              <div key={singleContent.id}>
                {loading ? (
                  <LoaderCircle className="animate-spin w-8 h-8 text-blue-500" />
                ) : (
                  <img
                    src={singleContent.img}
                    alt="hero"
                    className="w-full max-h-[700px] object-cover rounded mb-3"
                  />
                )}
                <div className="flex gap-5 mt-3">
                  <div className="flex gap-2 justify-center text-slate-600 items-center">
                    <Calendar className="" size={20} />
                    <p className="text-xs text-start md:text-md">
                      {singleContent.date}
                    </p>
                  </div>
                  <div className="flex gap-2 jusify-center text-slate-600 items-center">
                    <Clock className="" size={20} />
                    <p className="text-xs text-start md:text-md">02:00 PM</p>
                  </div>
                </div>
                <div className="my-3">
                  <h3 className="mt-2 text-sm text-blue-600 font-semibold">
                    By {singleContent.author}
                  </h3>
                  <h1 className="text-sm md:text-2xl leading-4.5 md:leading-6 font-semibold">
                    {singleContent.title}
                  </h1>
                  <div className="flex items-center text-blue-500 hover:text-blue-700 cursor-pointer gap-2 w-fit font-semibold transition-transform mt-2">
                    <Link
                      to={`/article/${singleContent.id}`}
                      className="text-sm">
                      Selengkapnya
                    </Link>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            )
          }
        </div>
        <div className="hidden md:flex flex-row">
          {newBlogs &&
            newBlogs.map((blog) => (
              <Card
                key={blog.id}
                img={blog.img}
                content={blog.content}
                title={blog.title}
                link={`/article/${blog.id}`}
                className={"line-clamp-3 md:mr-3 h-fit"}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
