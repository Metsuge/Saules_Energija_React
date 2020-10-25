import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <a
            key={number}
            onClick={() => {
              paginate(number);
            }}
            
            className="page-link"
          >
            <li key={number} className="page-item">
              {number}
            </li>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
