import { useBlog } from "../controllers/useBlog";
import { ArrowRight, LoaderCircle } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const RightPanel = (className) => {
  const { blogs, loading } = useBlog();

  const articles = blogs.slice(6, 11);
  return (
    <aside
      className="bg-slate-50 h-fit rounded-md px-5 xl:max-w-md">
      <h1 className="text-3xl text-blue-500 font-bold mt-3">
        Berita <span className="text-red-500">Populer</span>
      </h1>
      {/* divider */}
      <div className="my-2 border-t border-zinc-200"></div>
      {/* card  */}
      {loading ? (
        <LoaderCircle className="flex items-center justify-center animate-spin w-8 h-8 text-blue-500" />
      ) : !articles ? (
        <p className="flex items-center justify-center text-center text-gray-500 py-4">
          Tidak ada artikel.
        </p>
      ) : (
        articles &&
        articles.map((blog) => (
          <div key={blog.id} className="max-w-md overflow-auto md:max-w-2xl">
            <div className="md:flex items-center">
              {/* <div className="md:shrink-0">
                <img
                  className="md:h-28 w-full rounded object-cover md:w-48"
                  src={blog.img}
                  alt="Modern building architecture"
                />
              </div> */}
              <div className="py-3">
                <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                  <Link
                    to={`/article/${blog.id}`}
                    className="mt-1 block text-lg leading-tight font-medium hover:underline">
                    {blog.title}
                  </Link>
                </div>
                <p className="mt-2 text-gray-500 line-clamp-2">
                  {blog.content}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </aside>
  );
};

export default RightPanel;
