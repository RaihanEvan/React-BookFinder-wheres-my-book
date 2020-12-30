import React from "react";

const Pagination = (props) => {
  const page_links = [];
  return (
    <div>
    <div>
      <div>
          {props.currentPage!==1?
          (<button style={{marginRight: 3}}><i>Prev</i></button>):""}
          {page_links}
          {props.currentPage!==props.totalPages?
          (<button style={{marginLeft: 6}}><i>Next</i></button>):" "}
        </div>
    </div>
    </div>
  );
};
export default Pagination;