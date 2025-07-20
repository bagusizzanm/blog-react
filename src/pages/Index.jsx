import React, { useEffect, useState } from "react";
import { useBlog } from "../controllers/useBlog.js";
import Articles from "../components/Articles";
import { LoaderCircle } from "lucide-react";
import Hero from "../components/Hero.jsx";
import Pagination from "../components/Pagination.jsx";
import RightPanel from "../layout/RightPanel.jsx";
import SearchLayout from "../layout/SearchLayout.jsx";

const POSTS_PER_PAGE = 12;
const Homepage = () => {
  const { blogs, loading, error } = useBlog();
  // const [currentPage, setCurrentPage] = useState(1);
  // Hitung index awal dan akhir untuk slicing
  const getInitialPage = () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"), 10);
    return isNaN(page) || page < 1 ? 1 : page;
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentBlogs = blogs?.slice(startIndex, endIndex);

  const totalPages = Math.ceil((blogs?.length || 0) / POSTS_PER_PAGE);

  useEffect(() => {
    // Simpan halaman ke URL setiap kali halaman berubah
    const params = new URLSearchParams(window.location.search);
    params.set("page", currentPage);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
  }, [currentPage]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoaderCircle className="animate-spin w-12 h-12 text-blue-500" />
      </div>
    );
  if (error) return <p className="p-6 text-center text-red-500">{error}</p>;

  return (
    <section className="@container mt-5 py-10">
      <div className="relative flex flex-col xl:flex-row gap-x-5">
        {/* <div className="flex flex-col w-full gap-5">
          <Hero />
          <div>
            <h1 className="text-3xl font-bold mt-10">New Articles</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-x-15 mb-5">
              {currentBlogs &&
                currentBlogs.map((blog) => (
                  <Articles
                    key={blog.id} 
                    id={blog.id}
                    title={blog.title}
                    content={blog.content}
                    img={blog.img}
                    tags={blog.tags}
                    date={blog.date}
                    author={blog.author}
                    loading={loading}
                    link={`/article/${blog.id}`}
                    className="line-clamp-3 w-fit h-fit"
                  />
                ))}
            </div>
          </div>
        </div>
        <RightPanel />
        <div className="xl:w-1/4">
        </div> */}
        {/* Konten utama */}
        <div className="w-full xl:w-3/4">
          <Hero />
          <div>
            <h1 className="text-3xl font-bold mt-10">New Articles</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-5">
              {currentBlogs &&
                currentBlogs.map((blog) => (
                  <Articles
                    key={blog.id}
                    id={blog.id}
                    title={blog.title}
                    content={blog.content}
                    img={blog.img}
                    tags={blog.tags}
                    date={blog.date}
                    author={blog.author}
                    loading={loading}
                    link={`/article/${blog.id}`}
                    className="line-clamp-3 w-fit h-fit"
                  />
                ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full xl:w-1/4">
          <RightPanel />
        </div>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default Homepage;
