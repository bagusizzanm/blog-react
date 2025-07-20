import axios from "axios";
import { Blog } from "../models/Blog";

const API_URL = "http://localhost:5173/api/blogs.json";
const USER_API = "https://jsonplaceholder.typicode.com/users";
const POST_API = "https://jsonplaceholder.typicode.com/posts";

export const postBlog = async (blog) => {
  const response = await axios.post(POST_API, blog);
  return response.data;
};

export const fetchBlogs = async () => {
  const response = await axios.get(API_URL);
  return response.data.map((blog) => new Blog(blog));
};

export const fetchBlogById = async (id) => {
  const response = await axios.get(API_URL);
  const blog = response.data.find((blog) => blog.id === parseInt(id));
  return blog ? new Blog(blog) : null;
};

export const fetchUsers = async () => {
  const response = await axios.get(USER_API);
  return response.data;
};
