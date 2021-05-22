import React from "react";
import PagInationWrapper from "../styles/style.pagination";
const PageInation = ({ dataPerPage, totalData, pageinate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PagInationWrapper>
      {pageNumbers.map((number) => (
        <span key={number} className="page-span">
          <a className="page-nums" onClick={() => pageinate(number)}>
            {number}
          </a>
        </span>
      ))}
    </PagInationWrapper>
  );
};

export default PageInation;
