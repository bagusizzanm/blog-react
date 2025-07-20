import { ChevronFirst, ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = [...Array(totalPages)].map((_, i) => i + 1);

  return (
    <div className="flex space-x-1 justify-center mt-15">
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="p-1 mr-3 cursor-pointer border rounded-full text-slate-300 hover:text-slate-500 transition-colors duration-300">
          <ChevronLeft />
        </button>
      )}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 border-slate-300 border rounded hover:bg-slate-300 transition-colors duration-300 cursor-pointer ${
            page === currentPage
              ? "bg-slate-800 text-white border-none"
              : "bg-white text-slate-800 border-slate-300"
          }`}>
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="p-1 ml-3 border rounded-full cursor-pointer text-slate-300 hover:text-slate-500 transition-colors duration-300">
          <ChevronRight />
        </button>
      )}
    </div>
  );
};

export default Pagination;
