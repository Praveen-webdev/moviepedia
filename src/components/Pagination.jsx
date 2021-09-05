import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick }) => {
	return (
		<div className="container mt-2">
			<ReactPaginate
				previousLabel={"← "}
				nextLabel={" →"}
				pageCount={99}
				initialPage={0}
				pageRangeDisplayed={1}
				marginPagesDisplayed={2}
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
