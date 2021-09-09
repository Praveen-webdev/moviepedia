import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, genrePage }) => {
	return (
		<div className="container mt-2 mb-4">
			<ReactPaginate
				previousLabel={"← "}
				nextLabel={" →"}
				pageCount={99}
				forcePage={genrePage}
				pageRangeDisplayed={1}
				marginPagesDisplayed={1}
				disableInitialCallback={true}
				onPageChange={handlePageClick}
				containerClassName={"pagination"}
				previousLinkClassName={"pagination__link"}
				nextLinkClassName={"pagination__link"}
				disabledClassName={"pagination__link--disabled"}
				activeClassName={"pagination__link--active"}
			/>
		</div>
	);
};

export default Pagination;
