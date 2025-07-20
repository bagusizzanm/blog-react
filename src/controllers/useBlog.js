import { fetchBlogById, fetchBlogs } from "../services/api.js";
import { useEffect, useState } from "react";

export const useBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = async () => {
    try {
      setLoading(true);
      // Cek apakah data sudah ada di sessionStorage
      const cached = sessionStorage.getItem("blogs");
      if (cached) {
        setBlogs(JSON.parse(cached));
        setLoading(false);
        return;
      }
      const data = await fetchBlogs();

      // acak sekali
      const shuffled = [...data].sort(() => Math.random() - 0.5);

      setBlogs(shuffled);
      sessionStorage.setItem("blogs", JSON.stringify(shuffled));
    } catch (err) {
      setError(`Failed to fetch blog ${err}}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return { blogs, loading, error, refetch: load };
};

export const useBlogById = (id) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = async () => {
    try {
      setLoading(true);
      const data = await fetchBlogById(id);

      setArticle(data);
    } catch (err) {
      setError(`Failed to fetch blog ${err}}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [id]);

  return { article, loading, error, refetch: load };
};

export const searchBlog = (query) => {
  return fetchBlogs().then((blogs) => {
    return blogs.filter((blog) => blog.title.includes(query));
  });
};