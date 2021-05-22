import React from "react";

const PageInation = ({ dataPerPage, totalData, pageinate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      {pageNumbers.map((number) => (
        <span key={number} style={{ margin: "10px auto" }}>
          <a
            style={{
              fontSize: "50px",
              fontWeight: "W500",
              color: "grey",
              textDecoration: "none",
              padding: "15px",
            }}
            onClick={() => pageinate(number)}
            href="!#"
            className="page-link"
          >
            {number}
          </a>
        </span>
      ))}
    </>
  );
};

export default PageInation;
